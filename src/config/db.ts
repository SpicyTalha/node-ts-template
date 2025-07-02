//EXAMPLE FILE TO CONFIGURE MONGODB CONNECTION

/* import mongoose from "mongoose";
import { getConfig } from "./config";
import { logger } from "../libs/logger";
export const connectToDatabase = async () => {
  const config = getConfig();
  const dbUri = config.dbUri;

  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("Database connection established successfully.");
  } catch (error) {
    logger.error(`Database connection error: ${(error as Error).message}`);
    process.exit(1); // Exit the process if database connection fails
  }
}; */