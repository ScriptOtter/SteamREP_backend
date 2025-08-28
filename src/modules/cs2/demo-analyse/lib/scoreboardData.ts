import { parseEvent, parseTicks } from '@laihoe/demoparser2';

export const scoreboardData = (pathToDemo: string) => {
  let gameEndTick = Math.max(
    ...parseEvent(pathToDemo, 'round_end').map((x) => x.tick),
  );

  let fields = [
    'kills_total',
    'deaths_total',
    'assists_total',
    'headshot_kills_total',
    'ace_rounds_total',
    '4k_rounds_total',
    '3k_rounds_total',
    '2k_rounds_total',
    'damage_total',

    'mvps',
    'crosshair_code',
    'score',
    'player_color',

    'rank', // цифры победы
    'comp_wins', //победы прем/мм/напы

    'team_surrendered', //true = da false = net  null = baza
    'team_score_first_half',
    'team_score_second_half',

    'match_making_mode', //match_making_mode=1 - prem
  ];
  return parseTicks(pathToDemo, fields, [gameEndTick]);
};
