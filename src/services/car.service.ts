import { carRepository } from "../repositories/car.repository";
import { ICar } from "../types/car.type";

class CarService {
  public async getAll(): Promise<ICar[]> {
    return await carRepository.getAll();
  }

  public async getById(id: string): Promise<ICar> {
    return await carRepository.findById(id);
  }

  public async create(dto: ICar): Promise<ICar> {
    return await carRepository.create(dto);
  }

  public async delete(carId: string): Promise<void> {
    return await carRepository.delete(carId);
  }

  public async update(carId: string, dto: Partial<ICar>): Promise<ICar> {
    return await carRepository.update(carId, dto);
  }
}
export const carService = new CarService();
