import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString({ message: 'Value must be string' })
  readonly email: string;

  @MinLength(3)
  @IsNotEmpty()
  @IsString({ message: 'Value must be string' })
  readonly password: string;
}
