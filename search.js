function search (arr, val) {
	let min = 0;
	let max = arr.length - 1;

	while (min < max) {
		let middle = Math.floor((min + max) / 2);
		let currentElem = arr[middle];

		if (arr[middle] < val) {
			min = middle + 1;
		} else if (arr[middle] > val) {
			max = middle - 1;
		} else { 
        	return middle;
		}
	}	

	return -1;
}