export interface AccountData {
  account_id: number;
  global_stats: GlobalStats;
  penalty_seconds: number | null;
  vac_banned: number | null;
  commendation: Commendation;
  /**
   * Private rank level
   */
  player_level: number;
  /**
   * Current XP, starting at 327680000 (level % = (player_cur_xp - 327680000) / 5000)
   */
  player_cur_xp: number;
  rankings: Ranking[];
  ranking: Ranking | null;
  /**
   * Achievement medals, their ranks and coins
   */
  medals: Medals | null;
  /**
   * Seems to alway be `null`
   */
  player_xp_bonus_flags: null;

  my_current_event: unknown | null;
  my_current_event_teams: unknown[];
  my_current_team: unknown | null;
  my_current_event_stages: unknown[];
  survey_vote: unknown | null;
  activity: unknown | null;
  ongoingmatch: unknown | null;
  penalty_reason: unknown | null;
}

export interface Ranking {
  account_id: number;
  /**
   * Rank (0-18), starting at 0 for unranked
   */
  rank_id: number;
  wins: number;
  /**
   * Seems to alway be `null`
   */
  rank_change: null;
  /**
   * Rank type (6: Matchmaking, 7: Wingman, 10: Danger Zone)
   */
  rank_type_id: number;
}

export interface Medals {
  /**
   * Array of copins
   */
  display_items_defidx: number[];
  featured_display_item_defidx: number;

  medal_team?: unknown | null;
  medal_combat?: unknown | null;
  medal_weapon?: unknown | null;
  medal_global?: unknown | null;
  medal_arms?: unknown | null;
}

export interface GlobalStats {
  search_statistics: SearchStatistic[];
  players_online: number;
  servers_online: number;
  players_searching: number;
  servers_available: number;
  ongoing_matches: number;
  search_time_avg: number;
  main_post_url: string;
  required_appid_version: number;
  pricesheet_version: number;
  twitch_streams_version: number;
  active_tournament_eventid: number;
  active_survey_id: number;

  rtime32_cur: unknown | null;
  rtime32_event_start: unknown | null;
}

export interface SearchStatistic {
  game_type: number;
  search_time_avg: number | null;
  players_searching: number | null;
}

export interface Commendation {
  cmd_friendly: number;
  cmd_teaching: number;
  cmd_leader: number;
}

// #endregion AccountData

// #region Match
export interface MatchesData {
  matches: Match[];
  streams: unknown[];
  msgrequestid: number;
  accountid: number | null;
  servertime: number;

  tournamentinfo: unknown | null;
}

export interface Match {
  roundstatsall: RoundStats[];
  matchid: string;
  matchtime: number | unknown;
  watchablematchinfo: WatchableMatchInfo;
  roundstats_legacy: RoundStats | null;
}

export interface RoundStats {
  kills: number[];
  assists: number[];
  deaths: number[];
  scores: number[];
  pings: number[];
  team_scores: number[];
  enemy_kills: number[];
  enemy_headshots: number[];
  enemy_3ks: number[];
  enemy_4ks: number[];
  enemy_5ks: number[];
  mvps: number[];
  enemy_kills_agg: number[];
  enemy_2ks: number[];
  player_spawned: number[];
  team_spawn_count: number[];
  reservationid: string | null;
  reservation: Reservation;
  map: string | null;
  match_result: number | null;
  reservation_stage: number;
  match_duration: number;
  max_rounds: number | null;

  round: unknown | null;
  round_result: unknown | null;
  confirm: unknown | null;
  spectators_count: unknown | null;
  spectators_count_tv: unknown | null;
  spectators_count_lnk: unknown | null;
  drop_info: unknown | null;
  b_switched_teams: unknown | null;
}

export interface Reservation {
  account_ids: number[];
  party_ids: number[];
  tournament_teams: TournamentTeams[];
  tournament_event: TournamentEvent | null;
  tournament_casters_account_ids: number[];
  game_type: number | null;

  rankings: unknown[];
  match_id: unknown | null;
  server_version: number;
  encryption_key: unknown | null;
  encryption_key_pub: unknown | null;
  tv_master_steamid: unknown | null;
  tv_relay_steamid: unknown | null;
  pre_match_data: unknown | null;
  rtime32_event_start: unknown | null;
  tv_control: unknown | null;
  flags: unknown | null;
}

export interface TournamentTeams {
  players: {
    account_id: number;
    player_nick: 'string';
    player_name: string | null;
    player_flag: string | null;
    player_dob: unknown | null;
    player_location: unknown | null;
    player_desc: unknown | null;
  };
  team_id: number;
  team_tag: string;
  team_flag: string;
  team_name: string;
}

export interface TournamentEvent {
  event_id: number;
  event_tag: string;
  event_name: string;
  event_time_start: number;
  event_time_end: number;
  event_public: number;
  event_stage_id: number;
  event_stage_name: string;
  active_section_id: number;
}

export interface WatchableMatchInfo {
  server_ip: number | null;
  tv_port: number | null;
  tv_spectators: number;
  tv_time: number | null;
  cl_decryptdata_key_pub: string | null;
  game_type: number | null;
  game_mapgroup: string | null;
  game_map: string | null;
  server_id: string | null;
  match_id: string | null;

  tv_watch_password: unknown | null;
  cl_decryptdata_key: unknown | null;
  reservation_id: unknown | null;
}
