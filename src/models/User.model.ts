import { model, Schema } from "mongoose";

import { EGenders } from "../enums/gender.enum";
// import { IUser } from "../types/user.type";

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
    isActive: {
      type: Boolean,
      default: false,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = model("user", userSchema);
// export const User = model<IUser>("user", userSchema);
