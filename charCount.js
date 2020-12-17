function charCount(str) {
	const result = {};

	for (let i = 0; i < str.length; i++) {
		const char = str[i].toLowerCase();
		
		if (/[a-z0-9]/.test(char)) {
			if (result[char] > 0) {
				result[char]++
			} else {
				result[char] = 1;
			}
		}
	}

	return result;
}

function charCount1(str) {
	const result = {};

	for (let char of str) {		
		if (isAlphaNumeric(char)) {
			result[char] = ++result[char] || 1;
		}
	}

	return result;
}

function isAlphaNumeric (char) {
	const code = charCodeAt(0);

	if (!(code > 47 && code < 58) &&  // numeric (0-9)
		!(code > 64 && code < 91) &&  // upper alpha (A-Z)
		!(code > 96 && code < 123)) { // lower alpha (a-z)
		return false;
	}

	return true;  
}

