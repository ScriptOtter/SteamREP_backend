const SteamUser = require('steam-user');
const GlobalOffensive = require('globaloffensive');
const readline = require('readline');
const { ShareCode } = require('globaloffensive-sharecode');

const client = new SteamUser();
const csgo = new GlobalOffensive(client);
const shared = new ShareCode('7KHW-RC6HW-VSBB');
console.log(shared);
console.log(shared.decode());

const logOnOptions = {
  accountName: 'Denegnetycsgo19',
  password: 'Ijo4BGwUaO70',
  twoFactorCode: '',
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

client.logOn(logOnOptions);

client.on('loggedOn', () => {
  console.log('Logged into Steam');
  client.setPersona(SteamUser.EPersonaState.Online);
  client.gamesPlayed([730]);
  //console.log(client);
});

client.on('error', (err) => {
  console.error('An error occurred:', err);
});

client.on('steamGuard', (domain, callback) => {
  console.log('Steam Guard code needed');
  rl.question('Please enter Steam Guard code: ', (code) => {
    callback(code);
  });
});

csgo.on('connectedToGC', () => {
  console.log('Connected to CS:GO GC');

  const askForId = async () => {
    rl.question('Введите ID игрока (или "exit" для выхода): ', (id) => {
      if (id.toLowerCase() === 'exit') {
        rl.close();
        return;
      }

      //console.log('requestGame', csgo.requestGame(data));
      // const inspectLink = csgo.requestPlayersProfile(id, async (e) => {
      //   console.log('requestPlayersProfile', e);
      // });

      const requestRecentGames = csgo.requestRecentGames();
      console.log(requestRecentGames);
      //const requestLiveGameForUser = csgo.requestLiveGameForUser(id);

      // console.log(
      //   'requestRecentGames=',
      //   requestRecentGames,
      //   'requestLiveGameForUser=',
      //   requestLiveGameForUser,
      // );
      // Запрашиваем следующий ID
      askForId();
    });
  };

  // Начинаем запрашивать ID
  askForId();
});

csgo.on('disconnectedFromGC', (reason) => {
  console.log('Disconnected from GC:', reason);
});

csgo.on('error', (err) => {
  console.error('An error occurred in CS:GO module:', err);
});
