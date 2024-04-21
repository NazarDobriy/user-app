import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserDto } from './dto/user.dto';
import { compare } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async create(dto: UserDto): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email: dto.email }
    });

    if (user) {
      throw new HttpException(
        'Email is already taken',
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    const createdUser = await this.userRepository.create(dto);
    return createdUser;
  }

  async login(dto: UserDto): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email: dto.email }
    });

    if (!user) {
      throw new HttpException(
        "User isn't found",
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    const isCorrectPassword = await compare(dto.password, user.password);

    if (!isCorrectPassword) {
      throw new HttpException(
        'Incorrect password',
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    return user;
  }
}
