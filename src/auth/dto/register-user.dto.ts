import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsString({ message: 'Email must be string!' })
  @IsEmail({}, { message: 'Email is no valid!' })
  @IsNotEmpty({ message: 'Email is empty!' })
  email: string;

  @IsString({ message: 'Username must be string!' })
  @IsNotEmpty({ message: 'Username is empty!' })
  username: string;

  @IsString({ message: 'Password must be string!' })
  @IsNotEmpty({ message: 'Password is empty!' })
  password: string;

  @IsString({ message: 'Confirm password must be string!' })
  @IsNotEmpty({ message: 'Confirm password is empty!' })
  confirmPassword: string;
}
