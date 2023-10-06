import { model, Schema } from "mongoose";

import { EProducer } from "../enums/car.producer.enum";
import {ICar} from "../types/car.type";

const carSchema = new Schema(
  {
    brand: {
      type: String,
      require: true,
    },
    model: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    year: {
      type: Number,
      require: true,
    },
    producer: {
      type: String,
      enum: EProducer,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);
export const Car = model<ICar>("car", carSchema);
