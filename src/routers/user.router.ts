import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { userMiddleware } from "../middlewares/user.middleware";
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

router.put(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  commonMiddleware.isBodyValid(UserValidator.update),
  userController.update,
);

router.delete(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userController.delete,
);

export const userRouter = router;
// async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { id } = req.params;
//     const { error, value } = UserValidator.update.validate(req.body);
//
//     if (error) {
//       throw new ApiError(error.message, 400);
//     }
//     const user = await User.findByIdAndUpdate(id, value, {
//       returnDocument: "after",
//     });
//     if (!user) {
//       throw new ApiError("User not found", 404);
//     }
//
//     res.status(201).json(user);
//   } catch (e) {
//     next(e);
//   }
// }
