export function formatUnixTime(unixTime: number): string {
  // Создаем объект Date из Unix времени (умножаем на 1000, так как в JavaScript время в миллисекундах)
  const date = new Date(unixTime * 1000);

  // Получаем компоненты даты
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Определяем суффикс для дня
  const suffix =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
        ? 'nd'
        : day % 10 === 3 && day !== 13
          ? 'rd'
          : 'th';

  // Формируем строку в нужном формате
  return `${day}${suffix} ${month} ${year} ${hours}:${minutes}:${seconds}`;
}
