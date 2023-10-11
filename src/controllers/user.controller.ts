import { NextFunction, Request, Response } from "express";

import { EEmailAction } from "../enums/email.action.enum";
import { emailService } from "../services/email.service";
import { userService } from "../services/user.service";
import { IUser } from "../types/user.type";

class UserController {
  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<IUser[]>> {
    try {
      //TODO - need relocate this email.service V
      await emailService.sendMail(
        "2507artem@gmail.com",
        EEmailAction.REGISTER,
        { name: "Snow" },
      );

      const users = await userService.getAll();
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(req.res.locals);
      next();
    } catch (e) {
      next(e);
    }
  }

  public async delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      await userService.delete(req.params.userId);
      res.status(201).json("user deleted");
    } catch (e) {
      next(e);
    }
  }

  public async update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const user = await userService.update(req.params.userId, req.body);
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
