import { FilterQuery } from "mongoose";

import { User } from "../models/User.model";
import { IUser, IUserCredentials } from "../types/user.type";

class UserRepository {
  public async getAll(): Promise<IUser[]> {
    return await User.find();
  }

  public async getOneByParams(params: FilterQuery<IUser>): Promise<IUser> {
    return await User.findOne(params);
  }

  public async findById(id: string): Promise<IUser> {
    return await User.findById(id);
  }

  public async register(dto: IUserCredentials) {
    await User.create(dto);
  }
  // public async register(dto: IUserCredentials): Promise<IUserCredentials> {
  //   return (await User.create(dto)).toObject() as IUserCredentials;
  // }

  public async delete(userId: string): Promise<any> {
    return await User.deleteOne({ _id: userId });
  }
  public async update(userId: string, dto: Partial<IUser>): Promise<IUser> {
    return await User.findByIdAndUpdate(userId, dto, {
      returnDocument: "after",
    });
  }
}
export const userRepository = new UserRepository();
