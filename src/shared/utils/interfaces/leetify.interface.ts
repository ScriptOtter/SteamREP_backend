interface bans {
  platform: string;
  platform_nickname: string;
  banned_since: string;
}

interface competitive {
  map_name: string;
  rank: number;
}

interface ranks {
  leetify: number;
  premier: number;
  faceit: number;
  faceit_elo: number;
  wingman: number;
  renown: number;
  competitive: Array<competitive>;
}

export interface LeetifyProfile {
  winrate: number;
  total_matches: number;
  first_match_date: string;
  name: string;
  bans: Array<bans>;
  ranks: ranks;
}
