function findPair(arr, num) {
  const obj = {};

  for (const item of arr) {
    if (obj[item - num] || obj[item + num]) return true;
    obj[item] = item;
  }

  return false;
}