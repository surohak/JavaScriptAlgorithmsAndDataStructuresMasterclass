function fib (n) {
	if (n <= 2) {
		return 1;
	}

	return fib(n - 1) + fib(n - 2);
}

// recursive improved
function fibMemo (n, memo = [undefined, 1, 1]) {
	if (memo[n] !== undefined) {
		return memo[n];
	}

	if (n <= 2) {
		return 1;
	}

	const res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
	memo[n] = res;

	return res;
}

// tabulated
function fibTable (n) {
	if (n <= 2)	 {
		return 1;
	}

	const fibNums = [0, 1, 1];

	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}

	return fibNums[n];
}

console.log(fibTable(10000));
console.log(fibMemo(10000));
