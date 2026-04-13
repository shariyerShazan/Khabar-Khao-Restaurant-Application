import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
// import { IUser } from '../modules/auth/model/user.model.js';
import { sendResponse } from '../utils/sendResponse.js';



export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return sendResponse(res, {
        statusCode: 401,
        success: false,
        message: 'Please login - No auth header!',
      });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
      return sendResponse(res, {
        statusCode: 401,
        success: false,
        message: 'Please login - Token missing',
      });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };
    if (!decode) {
      return sendResponse(res, {
        statusCode: 401,
        success: false,
        message: 'Please login - Token expired or invalid',
      });
    }
    req.userId = decode.userId;
    next();
  } catch (error) {
    console.log(error);
    return sendResponse(res, {
      statusCode: 500,
      success: false,
      message: 'Please login - JWT error!',
    });
  }
};
