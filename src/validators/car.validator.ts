import joi from "joi";

export class CarValidator {
  static brand = joi.string().min(2).max(50).trim();
  static model = joi.string().trim();
  static price = joi.number();
  static year = joi.number().min(1900).max(2023);

  static create = joi.object({
    brand: this.brand.required(),
    model: this.model.required(),
    price: this.price.required(),
    year: this.year.required(),
  });
  static update = joi.object({
    brand: this.brand,
    model: this.model,
    price: this.price,
    year: this.year,
  });
}
