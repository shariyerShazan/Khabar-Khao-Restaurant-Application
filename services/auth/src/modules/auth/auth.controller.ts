import { Request, Response } from 'express';
import { AuthService } from './auth.service.js';
import { sendResponse } from '../../utils/sendResponse.js';
import { AuthenticatedRequest } from '../../middlewares/isAuth.js';
import { AppError } from '../../utils/appError.js';

export class AuthController {
  static loginUser = async (req: Request, res: Response) => {
    const result = await AuthService.loginUser(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Login successful',
      data: result,
    });
  };

  static addUserRole = async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.userId;
    if (!userId) {
      throw new AppError('Unauthorized', 401);
    }
    const result = await AuthService.addUserRole(userId.toString(), req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Role added successfully',
      data: result,
    });
  };

  static getMe = async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.userId;
    if (!userId) {
      throw new AppError('Unauthorized!', 401);
    }
    const result = await AuthService.getMe(userId.toString());

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'User retrieved successfully',
      data: result,
    });
  };
}
