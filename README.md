<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

The server-side part of the SteamREP project is a high-load platform for collecting, processing, and analyzing Counter-Strike 2 game statistics, as well as Steam user data. The backend provides complete infrastructure for interacting with the Steam API, database, and the website's client-side.

### Key Server Functions

**CS2 Integration:**
- Collection and aggregation of recent match statistics, including ranks, ratings, and shooting performance metrics.
- Processing requests for information about private ranks, likes, and player medals.
- Receiving and storing reports on Steam gaming profiles with attached evidence.

**Steam Integration:**
- Proxying requests to the Steam API for retrieving user profile data.
- Monitoring system for game and trade bans with daily database checks for VAC bans.
- Conversion and processing of various user identifier formats (SteamID, SteamID2, SteamID3, SteamID64Hex).

**Data Management:**
- Storage and processing of comments on user profiles, including support for private accounts.
- System for saving and monitoring Steam accounts in a single convenient storage.
- Daily background tasks (cron jobs) for checking ban status and updating data.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Enviroments
```env
NODE_ENV='development'

SERVER_URL=
ALLOWED_ORIGIN=

STEAM_API=

JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=

STEAMREP_GC=
STEAMREP_GC_TOKEN=

DATABASE_URL="prisma+postgres:..."

MAIL_HOST=
MAIL_PORT=
MAIL_LOGIN=
MAIL_PASSWORD=

S3_ENDPOINT=
S3_IMAGES_BUCKET_NAME=
S3_DEMOS_BUCKET_NAME=
S3_ACCESS_KEY=
S3_SECRET_KEY=
```



