function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const profit = prices[i] - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
    }

    if (minPrice > prices[i]) {
      minPrice = prices[i];
    }
  }
  return maxProfit;
}
