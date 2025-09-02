import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsString({ message: 'Email must be string!' })
  @IsEmail({}, { message: 'Email is no valid!' })
  @IsNotEmpty({ message: 'Email is empty!' })
  email: string;
  @IsNotEmpty({ message: 'Username is empty!' })
  @IsString({ message: 'Username must be string!' })
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'Login must contain only English letters.',
  })
  username: string;
  @IsNotEmpty({ message: 'Password is empty!' })
  @IsString({ message: 'Password must be string!' })
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'Login must contain only English letters.',
  })
  @MinLength(8, { message: 'The password must contain at least 8 characters' })
  password: string;
  @IsNotEmpty({ message: 'Confirm password is empty!' })
  @IsString({ message: 'Confirm password must be string!' })
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'Login must contain only English letters.',
  })
  @MinLength(8, { message: 'The password must contain at least 8 characters' })
  confirmPassword: string;
}
