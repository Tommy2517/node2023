import { userRepository } from "../repositories/user.repository";
import { IUser } from "../types/user.type";

class UserService {
  public async getAll(): Promise<IUser[]> {
    return await userRepository.getAll();
  }

  public async getById(id: string): Promise<IUser> {
    return await userRepository.findById(id);
  }

  public async create(dto: IUser): Promise<void> {
    return await userRepository.create(dto);
  }
}
export const userService = new UserService();
