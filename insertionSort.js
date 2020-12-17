function insertionSort (arr) {
	for (let i = 0; i < arr.length; i++) {
		let currentVal = arr[i];

		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}
	return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));

function insertionSortComparator(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (comparator(arr[j], arr[j - 1]) < 0) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      else break;
    }
  }

  return arr;
}