import { IsNotEmpty, IsString } from 'class-validator';

export class SteamUrlDto {
  @IsString()
  @IsNotEmpty()
  steamurl: string;
}
