import { Document, Types } from "mongoose";

import { IUser } from "./user.type";
import { EActionTokenType } from "../enums/actionTokenType.enum";

export interface ITokenPayload {
  userId: Types.ObjectId;
  name: string;
}

export interface ITokensPair {
  accessToken: string;
  refreshToken: string;
}

export interface IToken extends Document {
  accessToken: string;
  refreshToken: string;
  _userId: Types.ObjectId | IUser;
}

export interface IActionTokenDocument extends Document {
  token: string;
  type: EActionTokenType;
  _userId: Types.ObjectId | IUser;
}

export interface IActionToken
  extends Pick<IActionTokenDocument, "token" | "type" | "_userId"> {}
