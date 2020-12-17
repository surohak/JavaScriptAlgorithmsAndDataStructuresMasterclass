function bubbleSort (arr) {
	let noSwaps;

	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
				noSwaps = false;
			}
		}

		if (noSwaps) {
			break;
		}
	}

	return arr;
}

console.log(bubbleSort([37, 45, 29, 8]));

function bubbleSortComparator(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }

  let swap;

  for (let i = 0; i < arr.length; i++) {
    swap = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }

    if (!swap) break;
  }

  return arr;
}