// import { parseEvent } from '@laihoe/demoparser2';

// // Сопоставление названий оружия
// const weaponMapping = {
//   hkp2000: 'usp',
//   inferno: 'molotov',
//   // Добавьте другие соответствия, если необходимо
// };
// const result_fire: { [key: string]: { [key: string]: number } } = {};
// const results = {};

// export const shootingData = (pathToDemo: string) => {
//   let weapon_fire = parseEvent(pathToDemo, 'weapon_fire');
//   const player_hurt = parseEvent(pathToDemo, 'player_hurt');
//   weapon_fire.forEach((entry) => {
//     //if (entry.tick < 5000) console.log(entry);
//     const [playerId, weapon] = [entry.user_steamid, entry.weapon.split('_')[1]];

//     // Инициализация объекта для игрока, если его еще нет
//     if (!result_fire[playerId]) {
//       result_fire[playerId] = {};
//     }

//     // Инициализация счетчика для оружия, если его еще нет
//     if (!result_fire[playerId][weapon]) {
//       result_fire[playerId][weapon] = 0;
//     }

//     // Увеличиваем счетчик
//     result_fire[playerId][weapon]++;
//   });

//   player_hurt.forEach((event) => {
//     const { attacker_steamid, weapon, hitgroup, dmg_health, health } = event;

//     // Инициализируем объект для атакующего, если его еще нет
//     if (!results[attacker_steamid]) {
//       results[attacker_steamid] = {};
//     }

//     // Получаем соответствующее название оружия из fired
//     const mappedWeapon = weaponMapping[weapon] || weapon;

//     // Инициализируем объект для оружия, если его еще нет
//     if (!results[attacker_steamid][weapon]) {
//       results[attacker_steamid][weapon] = {
//         fire: result_fire[attacker_steamid]?.[mappedWeapon] || 0, // Получаем количество выстрелов или 0
//         hits: {},
//       };
//     }

//     // Инициализируем объект для hitgroup, если его еще нет
//     if (!results[attacker_steamid][weapon].hits[hitgroup]) {
//       results[attacker_steamid][weapon].hits[hitgroup] = {
//         hits: 0,
//         totalDamage: 0,
//         kills: 0,
//       };
//     }

//     // Увеличиваем счетчик попаданий
//     results[attacker_steamid][weapon].hits[hitgroup].hits++;

//     // Считаем урон с ограничением в 100
//     const damageToAdd = Math.min(dmg_health, 100);
//     results[attacker_steamid][weapon].hits[hitgroup].totalDamage += damageToAdd;

//     // Проверяем на убийство
//     if (health === 0 && dmg_health > 0) {
//       results[attacker_steamid][weapon].hits[hitgroup].kills++;
//     }
//   });
//   return results;
// };
