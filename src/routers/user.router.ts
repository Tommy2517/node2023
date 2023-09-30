import { NextFunction, Request, Response, Router } from "express";

import { userController } from "../controllers/user.controller";
import { ApiError } from "../errors/api.error";
import { userMiddleware } from "../middlewares/user.middleware";
import { User } from "../models/User.model";
import { commonMiddleware } from "../middlewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();
router.get("", userController.getAll);

router.get(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userMiddleware.getByIdOrThrow,
  userController.getById,
);

router.post(
  "",
  commonMiddleware.isBodyValid(UserValidator.create),
  userController.create,
);

router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { error, value } = UserValidator.update.validate(req.body);

    if (error) {
      throw new ApiError(error.message, 400);
    }
    const user = await User.findByIdAndUpdate(id, value, {
      returnDocument: "after",
    });
    if (!user) {
      throw new ApiError("User not found", 404);
    }

    res.status(201).json(user);
  } catch (e) {
    next(e);
  }
});

router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      if (!user) {
        throw new ApiError("User not found", 404);
      }

      await User.deleteOne({ _id: id });

      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  },
);

export const userRouter = router;
