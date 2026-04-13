import express from 'express';
import { AuthController } from './auth.controller.js';
import { validate } from '../../middlewares/validation.js';
import { UserLoginSchema } from './dto/login.user.dto.js';
import { asyncHandler } from '../../utils/asyncHandler.js';
import { addRoleSchema } from './dto/add.role.dto.js';
import { isAuth } from '../../middlewares/isAuth.js';


export const AuthRouter = express.Router();

AuthRouter.post(
  '/login',
  validate(UserLoginSchema),
  asyncHandler(AuthController.loginUser),
);

AuthRouter.post(
  '/add-role',
  validate(addRoleSchema),
  isAuth,
  asyncHandler(AuthController.addUserRole),
);

AuthRouter.get('/me', isAuth, AuthController.getMe);
