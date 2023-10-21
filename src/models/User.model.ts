import { model, Schema } from "mongoose";

import { EGenders } from "../enums/gender.enum";
import { EUserStatus } from "../enums/user-status.enum";
import {IUser} from "../types/user.type";

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
      min: [1, "Minimum age is 1"],
      max: [199, "Maximum age is 199"],
    },
    genders: {
      type: String,
      enum: Object.values(EGenders),
    },
    status: {
      type: String,
      enum: EUserStatus,
      require: true,
      default: EUserStatus.inactive,
    },
    email: {
      type: String,
      require: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// export const User = model("user", userSchema);
export const User = model<IUser>("user", userSchema);
