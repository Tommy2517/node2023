import bcrypt from "bcrypt";

import { configs } from "../configs/config";

class PasswordService {
  public async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, +configs.SECRET_SALT);
  }
}
export const passwordService = new PasswordService();
