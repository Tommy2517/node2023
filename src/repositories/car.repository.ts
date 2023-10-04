import { FilterQuery } from "mongoose";

import { Car } from "../models/Car.model";
import { ICar } from "../types/car.type";

class CarRepository {
  public async getAll(): Promise<ICar[]> {
    return await Car.find();
  }
  public async getOneByParams(params: FilterQuery<ICar>): Promise<ICar> {
    return await Car.findOne(params);
  }

  public async findById(id: string): Promise<ICar> {
    return await Car.findById(id);
  }

  public async create(dto: ICar): Promise<any> {
    return await Car.create(dto);
  }

  public async delete(carId: string): Promise<any> {
    return await Car.deleteOne({ _id: carId });
  }
  public async update(carId: string, dto: Partial<ICar>): Promise<ICar> {
    return await Car.findByIdAndUpdate(carId, dto, {
      returnDocument: "after",
    });
  }
}
export const carRepository = new CarRepository();
