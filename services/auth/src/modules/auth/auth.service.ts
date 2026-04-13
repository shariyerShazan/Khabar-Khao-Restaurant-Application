import jwt from 'jsonwebtoken';
import { User } from './model/user.model.js';
import { UserLoginDto } from './dto/login.user.dto.js';
import { addRoleDto } from './dto/add.role.dto.js';
import { AppError } from '../../utils/appError.js';
import { oath2client } from '../../config/googleConfig.js';
import axios from 'axios';

export class AuthService {
  static async loginUser(dto: UserLoginDto) {
    const { code } = dto;
    console.log('CODE:', code);
    const googleRes = await oath2client.getToken(code);
    oath2client.setCredentials(googleRes.tokens);

    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`,
    );
    const { email, name, picture } = userRes.data;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        image: picture || '',
        role: null,
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '7d',
      },
    );

    return {
      accessToken: token,
      user,
    };
  }

  static async addUserRole(userId: string, dto: addRoleDto) {
    const findUser = await User.findById(userId);

    if (!findUser) {
      throw new AppError('User not found', 404);
    }

    if (findUser.role) {
      throw new AppError('User role already exists', 400);
    }

    findUser.role = dto.role;
    await findUser.save();

    const token = jwt.sign(
      { userId: findUser._id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '7d',
      },
    );

    return {
      accessToken: token,
      user: findUser,
    };
  }

  static async getMe(userId: string) {
    const user = await User.findById(userId);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return user;
  }
}
