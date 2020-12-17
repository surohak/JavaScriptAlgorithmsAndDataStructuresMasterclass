function merge (arr1, arr2) {
	const res = [];

	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			res.push(arr1[i]);
			i++;
		} else {
			res.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		res.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		res.push(arr2[j]);
		j++;
	}


	return res;
}

function mergeSort (arr) {
	if (arr.length <= 1) return arr;

	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid)); 

	return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));

function mergeSortComparator(arr, comparator) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left, comparator), mergeSort(right, comparator), comparator);
}

function mergeComparator(left, right, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }
  const resultArr = [];
  let leftCount = 0;
  let rightCount = 0;

  while (leftCount < left.length && rightCount < right.length) {
    if (comparator(left[leftCount], right[rightCount]) < 0) {
      resultArr.push(left[leftCount]);
      leftCount++;
    } else {
      resultArr.push(right[rightCount]);
      rightCount++;
    }
  }

  while (leftCount < left.length) {
    resultArr.push(left[leftCount]);
    leftCount++;
  }

  while (rightCount < right.length) {
    resultArr.push(right[rightCount]);
    rightCount++;
  }

  return resultArr;
}
