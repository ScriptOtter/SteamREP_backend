import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class PasswordRecoveryDto {
  @IsNotEmpty({ message: 'Password is empty!' })
  @IsString({ message: 'Confirm password must be string!' })
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'Password must contain only English letters.',
  })
  @MinLength(8, { message: 'The password must contain at least 8 characters' })
  password: string;

  @IsNotEmpty({ message: 'Confirm password is empty!' })
  @IsString({ message: 'Confirm password must be string!' })
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'Password must contain only English letters.',
  })
  @MinLength(8, { message: 'The password must contain at least 8 characters' })
  confirmPassword: string;

  @IsString({ message: 'Token is miss!' })
  @IsNotEmpty({ message: 'Token is empty!' })
  token: string;
}
