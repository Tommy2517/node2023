import { FilterQuery } from "mongoose";

import { ActivateToken } from "../models/ActivateToken.model";
import { ITokensActivate } from "../types/activateToken.types";
// import { IToken } from "../types/token.types";

export class ActivateTokenRepository {
  public async create(dto: ITokensActivate): Promise<ITokensActivate> {
    return await ActivateToken.create(dto);
  }

  public async findOne(
    params: FilterQuery<ITokensActivate>,
  ): Promise<ITokensActivate> {
    console.log(params);
    return await ActivateToken.findOne(params);
  }

  public async deleteOne(params: FilterQuery<ITokensActivate>): Promise<void> {
    await ActivateToken.deleteOne(params);
  }
}

export const activateTokenRepository = new ActivateTokenRepository();
