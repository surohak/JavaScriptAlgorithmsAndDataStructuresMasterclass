function selectionSort (arr) {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}

		if (i !== lowest) {
			[arr[i], arr[lowest]] = [arr[lowest], arr[i]];
		}
	}
	return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));

function selectionSortComparator(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }

  let min;

  for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[min], arr[j]) > 0) min = j;
    }

    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}