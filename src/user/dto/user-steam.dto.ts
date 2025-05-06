import { IsNotEmpty, IsString } from 'class-validator';

export class UserSteamDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}
