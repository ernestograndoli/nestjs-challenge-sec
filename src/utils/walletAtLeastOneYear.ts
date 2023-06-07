export const walletAtLeastOneYear = (data: string[]) => {
  const orderedData = data.sort((a, b) => parseInt(a) - parseInt(b));
  const earliestTimestamp =
    orderedData.length > 0 ? parseInt(orderedData[0]) : null;

  if (earliestTimestamp) {
    const currentDate = new Date();
    const oneYearAgo = currentDate.setFullYear(currentDate.getFullYear() - 1);
    return earliestTimestamp < Math.floor(oneYearAgo / 1000);
  }

  return false;
};
