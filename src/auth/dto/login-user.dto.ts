import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString({ message: 'Username must be string!' })
  @IsNotEmpty({ message: 'Username is empty!' })
  username: string;

  @IsString({ message: 'Password must be string!' })
  @IsNotEmpty({ message: 'Password is empty!' })
  password: string;
}
