import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';

import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { AppError } from 'src/common/errors';
import { AuthUserResponse } from './response/auth-user.response';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async registerUser(dto: UserDto): Promise<AuthUserResponse> {
    const user = await this.userService.findUserByEmail(dto.email);

    if (user) {
      throw new HttpException(
        AppError.USER_EXIST,
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    await this.userService.createUser(dto);

    return this.userService.publicUser(dto.email);
  }

  async loginUser(dto: LoginDto): Promise<AuthUserResponse> {
    const user = await this.userService.findUserByEmail(dto.email);

    if (!user) {
      throw new HttpException(
        AppError.USER_NOT_EXIST,
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    const isCorrectPassword = await compare(dto.password, user.password);

    if (!isCorrectPassword) {
      throw new HttpException(
        AppError.WRONG_DATA,
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    return this.userService.publicUser(dto.email);
  }
}
