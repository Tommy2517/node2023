import { model, Schema } from "mongoose";

import { ITokensActivate } from "../types/activateToken.types";
import { User } from "./User.model";

const activateTokenSchema = new Schema(
  {
    activateToken: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      ref: User,
    },
  },
  { timestamps: true, versionKey: false },
);

export const ActivateToken = model<ITokensActivate>(
  "activateToken",
  activateTokenSchema,
);
