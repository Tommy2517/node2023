import { ApiError } from "../errors/api.error";
import { userRepository } from "../repositories/user.repository";
import { IUserCredentials } from "../types/user.type";
import { passwordService } from "./password.service";

class AuthService {
  public async register(dto: IUserCredentials): Promise<void> {
    try {
      const hashedPassword = await passwordService.hash(dto.password);
      await userRepository.register({ ...dto, password: hashedPassword });
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }
}
export const authService = new AuthService();
