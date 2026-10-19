import express from "express";
import cvRoutes from "./routes/cv.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/cv", cvRoutes);

app.use(errorMiddleware);

export default app;