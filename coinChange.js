function coinChange(denominations, value) {
  const table = Array.from({ length: value + 1 }).fill(0);
  table[0] = 1;

  for (let i = 0; i < denominations.length; i++) {
    for (let j = denominations[i]; j <= value; j++) {
      table[j] += table[j - denominations[i]];
    }
  }

  return table[value];
}

function minCoinChangeGA(coins, amount) {
  const result = [];
  coins.sort((a, b) => a - b);

  for (let i = coins.length - 1; i >= 0; i--) {
    while (amount >= coins[i]) {
      result.push(coins[i]);
      amount -= coins[i];
    }
  }

  if (amount) return null;
  return result;
}