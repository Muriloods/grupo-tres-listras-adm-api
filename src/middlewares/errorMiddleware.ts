import { NextFunction } from "express";
import { ApiError } from "../helpers/api-errors";
import { Response } from "express";

export const errorMiddleware = (err: Error & Partial<ApiError>, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode ?? 500;
  const message = err.message//err.statusCode ? err.message : "Internal Server Error";
  return res.status(statusCode).json({message})
}