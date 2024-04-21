import { Post, Body, Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from './user.model';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() dto: UserDto): Promise<User> {
    return this.userService.create(dto);
  }

  @Post('/login')
  async login(@Body() dto: UserDto): Promise<User> {
    return this.userService.login(dto);
  }
}
