function constructNote(message, letters) {
  const obj = {};

  for (const char of letters) {
    obj[char] = ++obj[char] || 1;
  }

  for (const char of message) {
    if (!obj[char]) return false;
    obj[char]--;
  }

  return true;
}