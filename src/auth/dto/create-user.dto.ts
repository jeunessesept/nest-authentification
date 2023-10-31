import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8, {
    message: 'your password should contains at least 8 characters',
  })
  password: string;

  @IsString()
  firstName: string;
}
