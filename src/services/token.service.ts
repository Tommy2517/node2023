import * as jwt from "jsonwebtoken";

import { configs } from "../configs/config";
import { ApiError } from "../errors/api.error";
import {
  IActivateTokenPayload,
  ITokensActivate,
} from "../types/activateToken.types";
import { ITokenPayload, ITokensPair } from "../types/token.types";

class TokenService {
  public generateTokenPair(payload: ITokenPayload): ITokensPair {
    const accessToken = jwt.sign(payload, configs.JWT_ACCESS_SECRET, {
      expiresIn: "10s",
    });
    const refreshToken = jwt.sign(payload, configs.JWT_REFRESH_SECRET, {
      expiresIn: "1m",
    });

    return {
      accessToken,
      refreshToken,
    };
  }
  public generateTokenActivate(payload: { email: string }): ITokensActivate {
    const activateToken = jwt.sign(payload, configs.JWT_ACTIVATE_SECRET, {
      expiresIn: "1h",
    });
    return {
      activateToken,
    };
  }

  public checkToken(
    token: string,
    type: "access" | "refresh" | "activate",
  ): ITokenPayload {
    try {
      let secret: string;

      switch (type) {
        case "access":
          secret = configs.JWT_ACCESS_SECRET;
          break;
        case "refresh":
          secret = configs.JWT_REFRESH_SECRET;
          break;
        case "activate":
          secret = configs.JWT_ACTIVATE_SECRET;
          break;
      }

      return jwt.verify(token, secret) as ITokenPayload;
    } catch (e) {
      throw new ApiError("Token not valid!(verify)", 401);
    }
  }

  public checkActivateToken(
    token: string,
    type: "activate",
  ): IActivateTokenPayload {
    try {
      let secret: string;

      switch (type) {
        case "activate":
          secret = configs.JWT_ACTIVATE_SECRET;
          break;
      }

      return jwt.verify(token, secret) as IActivateTokenPayload;
    } catch (e) {
      throw new ApiError("Token not valid!(verify)", 401);
    }
  }
}

export const tokenService = new TokenService();
