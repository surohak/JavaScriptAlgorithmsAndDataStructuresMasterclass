function collectOdds (arr) {
	let res = [];

	function helper (helperInput) {
		if (helperInput.length === 0) {
			return;
		}

		if (helperInput[0] % 2 !==0) {
			res.push(helperInput[0]);
		}

		helper(helperInput.slice(1));
	}

	helper(arr);

	return res;
}

// console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function collectOddValues (arr) {
	let newArr = [];

	if (!arr.length) {
		return newArr;
	}

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}

	newArr = newArr.concat(collectOddValues(arr.slice(1)));

	return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
