import mongoose from "mongoose";
import config from "./config.js";

export const dbConnection = async () => {
  const connection = await mongoose.connect(config.MONGO_URI, {
    useNEWUrlParser: true,
  });
  console.log("mongodb connected", connection.connection.host);
};
