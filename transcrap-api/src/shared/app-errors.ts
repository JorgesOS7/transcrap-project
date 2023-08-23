import { Request, Response, NextFunction } from "express";

export class AppError {
  constructor(
    public message: string,
    public statusCode: number = 400,
    public data?: any
  ) {}
}

export const handleAppError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
      data: error.data,
    });
  }
  console.error(error);
  return res.status(500).json({
    status: 500,
    message: "Internal Server Error",
  });
};

export const handleNotFoundRouteError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(404).json({
    status: 404,
    message: `the resource ${req.method} ${req.url} not found`,
  });
};
