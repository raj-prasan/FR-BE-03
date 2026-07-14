import express, { type Request, type Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./openapi.json" with { type: "json" };

import { taskRouter } from "./routes/task.route.js";

const app = express();
app.use(cors());

app.use(express.json({ limit: "16Kb" }));
app.use(cookieParser());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    name: "Task API",
    version: "1.0",
    endpoints: ["/tasks"],
  });
});
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok"
  });
});

app.use("/tasks", taskRouter);

export { app };
