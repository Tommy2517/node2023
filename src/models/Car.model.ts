import { model, Schema } from "mongoose";

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
  },
  {
    timestamps: true,
  },
);
export const Car = model("car", carSchema);
