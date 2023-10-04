import { Router } from "express";

import { carController } from "../controllers/car.controller";
import { carMiddleware } from "../middlewares/car.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { CarValidator } from "../validators/car.validator";

const router = Router();

router.get("", carController.getAll);

router.get(
  "/:carId",
  commonMiddleware.isIdValid("carId"),
  carMiddleware.getByIdOrThrow,
  carController.getById,
);

router.post(
  "",
  commonMiddleware.isBodyValid(CarValidator.create),
  carController.create,
);

router.put(
  "/:carId",
  commonMiddleware.isIdValid("carId"),
  commonMiddleware.isBodyValid(CarValidator.update),
  carController.update,
);

router.delete(
  "/:carId",
  commonMiddleware.isIdValid("carId"),
  carController.delete,
);
export const carRouter = router;
