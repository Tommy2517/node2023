import joi from "joi";

import { EProducer } from "../enums/car.producer.enum";

export class CarValidator {
  static brand = joi.string().min(2).max(50).trim();
  static model = joi.string().trim();
  static price = joi.number();
  static year = joi.number().min(1900).max(2023);
  static producer = joi.valid(...Object.values(EProducer));

  static create = joi.object({
    brand: this.brand.required(),
    model: this.model.required(),
    price: this.price.required(),
    year: this.year.required(),
    producer: this.producer.required(),
  });
  static update = joi.object({
    brand: this.brand,
    model: this.model,
    price: this.price,
    year: this.year,
    producer: this.producer,
  });
}
