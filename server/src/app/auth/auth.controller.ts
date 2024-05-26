import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserDto } from 'src/app/user/dto/user.dto';
import { LoginDto } from './dto/login.dto';
import { AuthUserResponse } from './response/auth-user.response';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: UserDto): Promise<AuthUserResponse> {
    return this.authService.registerUser(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto): Promise<AuthUserResponse> {
    return this.authService.loginUser(dto);
  }
}
