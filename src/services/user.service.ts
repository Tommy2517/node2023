import { ApiError } from "../errors/api.error";
import { userRepository } from "../repositories/user.repository";
import { IUser } from "../types/user.type";

class UserService {
  public async getAll(): Promise<IUser[]> {
    return await userRepository.getAll();
  }

  public async getById(id: string): Promise<IUser> {
    return await userRepository.findById(id);
  }

  public async create(dto: IUser): Promise<IUser> {
    await this.isEmailUniq(dto.email);
    return await userRepository.create(dto);
  }

  public async isEmailUniq(email: string): Promise<void> {
    const user = await userRepository.getOneByParams({ email });

    if (user) {
      throw new ApiError("Email already exist", 409);
    }
  }
  public async delete(userId: string): Promise<void> {
    return await userRepository.delete(userId);
  }

  public async update(userId: string, dto: Partial<IUser>): Promise<IUser> {
    return await userRepository.update(userId, dto);
  }
}
export const userService = new UserService();
