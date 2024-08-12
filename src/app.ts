import "express-async-errors"
import express from "express";
import cors from "cors";
import router from "./routes";
import "./providers/brokers/kafka/consumers"
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));
app.use(router);

// @ts-ignore
app.use(errorMiddleware)

export default app;
