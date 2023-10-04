import { Document } from "mongoose";

export interface ICar extends Document {
  brand: string;
  model: string;
  price: number;
  year: number;
}
