import { config } from "dotenv";

config();

export const configs = {
  DB_URI:
    process.env.DB_URI ||
    "mongodb+srv://dec2022:FbRCI4ppndbNiyUO@dec-2022.hq2lek2.mongodb.net/",
  PORT: process.env.PORT || 5001,
  SECRET_SALT: process.env.SECRET_SALT || 7,
};
