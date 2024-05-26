import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @MinLength(5)
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @MinLength(3)
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
