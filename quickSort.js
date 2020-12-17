function pivot (arr, start = 0, end = arr.length + 1) {
	let pivot = arr[start];
	let swapIndex = start;

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIndex++;
			[arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
		}	
	}
	[arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

	return swapIndex;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

function quickSort (arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		const pivotIndex = pivot(arr, left, right);
		quickSort(arr, left, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, right);
	}

	return arr;
}


console.log(quickSort([4, 6, 9, 1, 2, 5]));


function pivotComparator(arr, comparator, start = 0, end = arr.length - 1) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }

  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (comparator(arr[start], arr[i]) > 0) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }

  if (pivotIndex !== start) [arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]];

  return pivotIndex;
}

function quickSortComparator(arr, comparator, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = pivot(arr, comparator, start, end);

    quickSort(arr, comparator, start, pivotIndex - 1);
    quickSort(arr, comparator, pivotIndex + 1, end);
  }

  return arr;
}

