import { IsNotEmpty, IsNotEmptyObject, IsString } from 'class-validator';

export class SteamUserDto {
  steamid: string;

  personaname: string;

  profileurl: string;

  avatar: string;

  realname: string;

  timecreated: string;

  loccountrycode?: string;
}

export interface ISteamUser {
  steamid: string;
  personaname: string;
  profileurl: string;
  avatar: string;
  realname: string;
  timecreated: number;
  loccountrycode?: string;
}
