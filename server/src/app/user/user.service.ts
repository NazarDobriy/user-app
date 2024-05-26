import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from './models/user.model';
import { UserDto } from './dto/user.dto';
import { TokenService } from 'src/app/token/token.service';
import { AuthUserResponse } from 'src/app/auth/response/auth-user.response';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private readonly tokenService: TokenService
  ) {}

  async createUser(dto: UserDto): Promise<User> {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async publicUser(email: string): Promise<AuthUserResponse> {
    const user = await this.userRepository.findOne({
      where: { email },
      attributes: { exclude: ['password'] }
    });

    const token = await this.tokenService.generateJwtToken(user);

    return { token };
  }

  async findUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email }
    });
  }
}
