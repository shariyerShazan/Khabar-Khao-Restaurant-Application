import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/appError.js';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = err.statusCode || 500;
  let success = false;
  let message = err.message || 'Something went wrong!';
  let errorSources: any[] = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    errorSources = [
      {
        path: '',
        message: err.message,
      },
    ];
  } else if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation Error';
    errorSources = Object.values(err.errors).map((val: any) => ({
      path: val.path,
      message: val.message,
    }));
  } else if (err.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid ID';
    errorSources = [
      {
        path: err.path,
        message: `Invalid value for ${err.path}: ${err.value}`,
      },
    ];
  } else if (err.code === 11000) {
    statusCode = 400;
    message = 'Duplicate field value entered';
    const field = Object.keys(err.keyPattern)[0];
    errorSources = [
      {
        path: field,
        message: `${field} already exists`,
      },
    ];
  } else if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Invalid token. Please log in again!';
  } else if (err.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Your token has expired! Please log in again.';
  }

  return res.status(statusCode).json({
    success,
    message,
    errorSources,
    stack: process.env.NODE_ENV === 'development' ? err?.stack : null,
  });
};

