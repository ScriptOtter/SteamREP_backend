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

    // Получаем текст из div
    const value = await page.evaluate(() => {
      const element = document.querySelector('#kpd span'); // Находим элемент span внутри div с id="kpd"
      return element ? element.innerText : null; // Возвращаем текст, если элемент найден
    });

    console.log('Значение:', value); // Выводим значение

    // Закрываем браузер (если нужно)
  } catch (e) {
    console.error('Ошибка:', e);
  }
};

getData();
