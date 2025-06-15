export const genRandomCode = (): number => {
  const max = 1000000;
  return Math.floor(Math.random() * max);
};
