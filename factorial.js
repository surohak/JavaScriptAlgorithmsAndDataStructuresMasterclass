function factorial (num) {
	let total = 1;

	for (let i = num; i > 1; i--) {
		total *= i;
	}

	return total;
}

console.log(factorial(4));

function factorialRecursion (num) {
	if (num === 1) return 1;
	return num * factorialRecursion(num - 1);
}

console.log(factorialRecursion(4));