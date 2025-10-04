export function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  // Форматируем минуты и секунды с добавлением нуля спереди, если нужно
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  if (hours > 0) {
    // Если есть часы, возвращаем формат ч:мм:сс
    return `${hours}:${formattedMinutes}:${formattedSeconds}`;
  } else {
    // Если часов нет, возвращаем формат мм:сс
    return `${formattedMinutes}:${formattedSeconds}`;
  }
}
