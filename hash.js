function hash(key, arrayLen) {
	let total = 0;

	for (let char of key) {
		const value = char.charCodeAt(0) - 96;
		total = (total + value) % arrayLen;
	}

	return total;
}

console.log(hash('orange', 10));
console.log(hash('blue', 10));
console.log(hash('cyan', 10));
console.log(hash('purple', 10));
console.log(hash('maroon', 10));


// improved
function hashFunction(key, arrayLen) {
	let total = 0;
	const weirdPrime = 31;

	for (let i = 0; i < Math.min(key.length, 100); i++) {
		const value = key[i].charCodeAt(0) - 96;
		total = (total * weirdPrime + value) % arrayLen;
	}

	return total;
}

console.log(hashFunction('hello', 13));
console.log(hashFunction('goodbye', 13));
console.log(hashFunction('hi', 13));
console.log(hashFunction('cyan', 13));

