export const round = (num: number, decimals = 6) =>
  Math.round(num * 10 ** decimals) / 10 ** decimals;
