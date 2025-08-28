var {
  parseTicks,
  listGameEvents,
  parseVoice,
  parseEvents,
  parseGrenades,
  parsePlayerSkins,
  parseEvent,
  parseHeader,
} = require('@laihoe/demoparser2');

const pathToDemo = 'src/modules/matches/demo/1.dem';

let gameEndTick = Math.max(
  ...parseEvent(pathToDemo, 'round_end').map((x) => x.tick),
);
let skins = parsePlayerSkins(pathToDemo);
let header = parseHeader(pathToDemo);
let fields = [
  'kills_total',
  'deaths_total',
  'mvps',
  'headshot_kills_total',
  'ace_rounds_total',
  'score',
  'comp_rank_type',
  'chat_message',
];
let chat = parseTicks(pathToDemo, 'chat_message');
let scoreboard = parseTicks(pathToDemo, fields, [gameEndTick]);

console.log(scoreboard);
console.log(header, skins, chat);
