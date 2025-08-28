import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class LoginDto {
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'Login must contain only English letters.',
  })
  @IsString({ message: 'Username must be string!' })
  @IsNotEmpty({ message: 'Username is empty!' })
  username: string;
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'Login must contain only English letters.',
  })
  @IsString({ message: 'Password must be string!' })
  @IsNotEmpty({ message: 'Password is empty!' })
  password: string;
}
