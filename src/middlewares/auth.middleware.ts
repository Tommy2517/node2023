import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api.error";
import { activateTokenRepository } from "../repositories/activateToken.repository";
import { tokenRepository } from "../repositories/token.repository";
import { userRepository } from "../repositories/user.repository";
import { tokenService } from "../services/token.service";

class AuthMiddleware {
  public async checkAccessToken(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const accessToken = req.get("Authorization");

      if (!accessToken) {
        throw new ApiError("No Token!", 401);
      }

      const payload = tokenService.checkToken(accessToken, "access");

      const entity = await tokenRepository.findOne({ accessToken });
      console.log(entity);
      if (!entity) {
        throw new ApiError("Token not valid!", 401);
      }

      req.res.locals.tokenPayload = payload;
      req.res.locals.accessToken = accessToken;
      next();
    } catch (e) {
      next(e);
    }
  }

  public async checkRefreshToken(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const refreshToken = req.get("Authorization");

      if (!refreshToken) {
        throw new ApiError("No Token!", 401);
      }

      const payload = tokenService.checkToken(refreshToken, "refresh");

      const entity = await tokenRepository.findOne({ refreshToken });

      if (!entity) {
        throw new ApiError("Token not valid!(entity)", 401);
      }

      req.res.locals.tokenPayload = payload;
      req.res.locals.refreshToken = refreshToken;
      next();
    } catch (e) {
      next(e);
    }
  }

  public checkActivateToken(field: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const activateToken = req.params[field];
        if (!activateToken) {
          throw new ApiError("No Token!", 401);
        }

        // const payload = tokenService.checkActivateToken(
        //   activateToken,
        //   "activate",
        // );
        const entity = await activateTokenRepository.findOne({
          activateToken,
        });
        const { email } = entity;
        const user = await userRepository.getOneByParams({ email: email });
        const newUser = await userRepository.update(user.id, {
          isActive: true,
        });
        console.log(newUser);
        if (!entity) {
          throw new ApiError("Token not valid!(entity)", 401);
        }
        // req.res.locals.tokenPayload = payload;
        req.res.locals.refreshToken = activateToken;
        next();
      } catch (e) {
        next(e);
      }
    };
  }
}

export const authMiddleware = new AuthMiddleware();
