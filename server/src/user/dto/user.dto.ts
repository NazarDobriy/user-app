import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString({ message: 'Value must be string' })
  readonly email: string;

  @MinLength(5)
  @IsNotEmpty()
  @IsString({ message: 'Value must be string' })
  readonly username: string;

  @MinLength(3)
  @IsNotEmpty()
  @IsString({ message: 'Value must be string' })
  readonly password: string;
}
