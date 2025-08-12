const puppeteer = require('puppeteer');

const getData = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
    });

    const page = await browser.newPage();

    // Переходим на нужный сайт
    await page.goto('https://csstats.gg/player/76561198117401376'); // Замените на URL вашего сайта

    // Ждем, пока div станет доступным
    await page.waitForSelector('#kpd');
    await page.waitForSelector('#rating');
    await page.waitForSelector('#player-ranks .ranks');

    // Получаем текст из div
    // const value = await page.evaluate(() => {
    //   const kd = document.querySelector('#kpd span'); // Находим элемент span внутри div с id="kpd"
    //   const hltv = document.querySelector('#rating span');
    //   const playerRanks = document.querySelector('#player-ranks');
    //   return playerRanks.values, playerRanks;
    //   return { kd: kd.innerText, hltv: hltv.innerText }; // Возвращаем текст, если элемент найден
    // });

    const playerRanks = await page.evaluate(() => {
      const ranksData = [];
      const ranksElements = document.querySelectorAll('#player-ranks .ranks');

      ranksElements.forEach((rankElement) => {
        const rankInfo = {};

        // Получаем дату
        const dateElement = rankElement.querySelector('.bottom .date span');
        rankInfo.date = dateElement ? dateElement.innerText : null;

        // Получаем количество побед
        const winsElement = rankElement.querySelector('.bottom .wins b');
        rankInfo.wins = winsElement ? winsElement.innerText : null;

        const mapElement = rankElement.querySelector('.over .icon img');

        rankInfo.map = mapElement ? mapElement.alt : null;
        // Получаем информацию о ранге
        const rankElementInfo = rankElement.querySelector('.over .rank img');
        rankInfo.rankImage = rankElementInfo
          ? rankElementInfo.src.split('/')[5].split('.')[0]
          : null;

        // Получаем информацию о лучшем ранге
        const bestElementInfo = rankElement.querySelector('.over .best img');
        rankInfo.bestRankImage = bestElementInfo
          ? bestElementInfo.src.split('/')[5].split('.')[0]
          : null;

        ranksData.push(rankInfo);
      });

      return ranksData;
    });

    console.log(playerRanks);
    await page.goto('https://csstats.gg/player/76561198117401376#/matches');
    await page.waitForSelector('#match-list-outer');
    console.log('матчи загружены');

    const rows = await page.evaluate(() => {
      // Находим заголовки таблицы
      const headers = Array.from(
        document.querySelectorAll(
          '#match-list-outer > table > thead > tr > th',
        ),
      ).map((header) => header.innerText);

      // Находим все строки таблицы
      const rowElements = document.querySelectorAll(
        '#match-list-outer > table > tbody > tr',
      );

      // Извлекаем данные из строк и формируем массив объектов
      return Array.from(rowElements).map((row) => {
        const cells = row.children;
        const rowData = {};

        headers.forEach((header, index) => {
          rowData[header] = cells[index] ? cells[index].innerText : null; // Добавляем значение ячейки или null, если ячейка отсутствует
        });

        return rowData;
      });
    });

    console.log(rows); // Выводим массив строк таблицы

    // Закрываем браузер (если нужно)
  } catch (e) {
    console.error('Ошибка:', e);
  }
};

getData();
