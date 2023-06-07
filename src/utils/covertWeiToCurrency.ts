export const convertWeiToCurrency = (wei: string, exchangeRate: number) => {
  try {
    const weiValue = BigInt(wei);
    const ethValue = Number(weiValue) / 10 ** 18;
    const dollars = ethValue * exchangeRate;
    const roundedDollars = Math.round(dollars * 100) / 100;

    return roundedDollars;
  } catch (e) {
    return 'Error converting currency';
  }
};
