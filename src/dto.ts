import { IsString } from 'class-validator';

export class signUpDto {
  @IsString()
  email: string;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  confirmPassword: string;

  isChecked: boolean;
}

export type TSignUpDto = Partial<signUpDto>;
