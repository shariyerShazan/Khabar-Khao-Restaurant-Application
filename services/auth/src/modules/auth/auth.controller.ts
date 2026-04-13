import { Request, Response } from 'express';
import { AuthService } from './auth.service.js';
import { sendResponse } from '../../utils/sendResponse.js';
import { AppError } from '../../utils/appError.js';

export class AuthController {
  static loginUser = async (req: Request, res: Response) => {
    const result = await AuthService.loginUser(req.body);
    console.log(result)
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Login successful',
      data: result,
    });
  };

  static addUserRole = async (req: Request, res: Response) => {
    const userId = req.userId;
    if (!userId) {
      throw new AppError('Unauthorized', 401);
    }
    const result = await AuthService.addUserRole(userId, req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Role added successfully',
      data: result,
    });
  };

  static getMe = async (req: Request, res: Response) => {
    const userId = req.userId;
    if (!userId) {
      throw new AppError('Unauthorized!', 401);
    }
    const result = await AuthService.getMe(userId);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'User retrieved successfully',
      data: result,
    });
  };
}
