function getDigit (num, i) {
	const { floor, abs, pow } = Math;

	return floor(abs(num) / pow(10, i)) % 10;
}

function digitCount (num) {
	if (num === 0) return 1;

	const { floor, log10, abs } = Math;

	return floor(log10(abs(num))) + 1;
}

function mostDigits (nums) {
	let maxDigits = 0;

	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}

	return maxDigits;
}

function radixSort (nums) {
	const maxDigitCount = mostDigits(nums);

	for (let k = 0; k < maxDigitCount; k++) {
		const digitBuckets = Array.from({ length: 10 }, () => []);

		for (let i = 0; i < nums.length; i++) {
			const digit = getDigit(nums[i], k);
			digitBuckets[digit].push(nums[i]);
		}
		nums = [].concat(...digitBuckets);
	}

	return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9582]));
