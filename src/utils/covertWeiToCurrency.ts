export const convertWeiToCurrency = (wei: string, exchangeRate: number) => {
  try {
    const weiValue = BigInt(wei);

    // Convert wei to ETH
    const ethValue = Number(weiValue) / 10 ** 18;

    // Calculate the value in currency
    const dollars = ethValue * exchangeRate;

    // Round the result to 2 decimal places
    const roundedDollars = Math.round(dollars * 100) / 100;

    return roundedDollars;
  } catch (e) {
    console.log('Error currency: ', e);
  }
};
