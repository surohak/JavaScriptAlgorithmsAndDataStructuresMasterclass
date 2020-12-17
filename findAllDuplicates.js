function findAllDuplicates(arr) {
  const obj = {};
  const resultArr = [];

  for (const item of arr) {
    obj[item] = ++obj[item] || 1;
    if (obj[item] > 1) resultArr.push(item);
  }

  return resultArr;
}