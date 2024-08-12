import "express-async-errors"
import express from "express";
import router from "./routes";
import "./providers/brokers/kafka/consumers"
import { errorMiddleware } from "./middlewares/errorMiddleware";

const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(router);

// @ts-ignore
app.use(errorMiddleware)

export default app;
