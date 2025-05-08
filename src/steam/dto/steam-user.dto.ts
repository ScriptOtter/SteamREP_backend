import { IsNotEmpty, IsNotEmptyObject, IsString } from 'class-validator';

export class SteamUserDto {
  @IsString()
  @IsNotEmpty()
  steamid: string;

  @IsString()
  @IsNotEmpty()
  personaname: string;

  @IsString()
  @IsNotEmpty()
  profileurl: string;

  @IsString()
  @IsNotEmpty()
  avatar: string;

  @IsString()
  @IsNotEmpty()
  realname: string;

  @IsString()
  @IsNotEmpty()
  timecreated: string;
}

export interface ISteamUser {
  steamid: string;
  personaname: string;
  profileurl: string;
  avatar: string;
  realname: string;
  timecreated: number;
}
