import express, { type Express, type Request, type Response } from "express";
import {logger} from "./libs/logger";
import {routes} from "./routes";

const app: Express = express();
const initializeServer = async () => {
  try {
    const port = 3001;
    app.listen(port, () => {
      logger.info(
        `Server listening on port ${port}, url: http://localhost:${port}`,
      );
    });
  } catch (error) {
    // Handle any errors that occur during initialization
    logger.error(
      `Error during server initialization: ${(error as Error).message}`,
    );
    process.exit(1); // Exit the process if there's an error in initialization
  }
};
// Middleware and routes
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

routes(app);

app.get("/api/", (_req: Request, res: Response) => {
  try {
    logger.info("HEALTH -> GET_HEALTH = Health OK! Server is running");
    return res.status(200).send({
      status: 200,
      success: true,
      message: "Health OK! Server is running",
    });
  } catch (err) {
    logger.error(`HEALTH -> GET_HEALTH = ${(err as Error).message}`);
    return res.status(500).send({
      status: 500,
      success: false,
      error: { code: 500, message: (err as Error).message },
    });
  }
});

initializeServer();
