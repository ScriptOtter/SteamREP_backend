import { ISteamBans } from './steam-bans.dto';

export interface ITradeit {
  userLevel: number;
  steamId2: string;
  steamId3: string;
  steamIdHex: string;
  userFriendsCount: string;
  userBans: ISteamBans;
  isTradeitBanned: boolean;
  steamID: string;

  visible: boolean;
  personaState: number;
  personaStateFlags: number;
  allowsComments: boolean;
  nickname: string;
  createdTimestamp: number;
  realName: string;
  primaryGroupID: string;
  countryCode: string;
  stateCode: string;
}
