class Trie {
  constructor(isWord = false) {
    this.characters = {};
    this.isWord = isWord;
  }

  addWord(word, index = 0) {
    if (word.length === index) return this;

    const char = word[index];
    let subTrie;

    if (this.characters[char]) {
      subTrie = this.characters[char];
      subTrie.isWord = subTrie.isWord || word.length - 1 === index;
    } else {
      subTrie = new Trie(word.length - 1 === index);
      this.characters[char] = subTrie;
    }

    subTrie.addWord(word, index + 1);

    return this;
  }

  removeWord(word) {
    this._removeWord(word);

    return this;
  }

  _removeWord(word, index = 0) {
    const char = word[index];
    const subTrie = this.characters[char];

    if (!subTrie) return false;

    if (word.length - 1 > index) {
      return subTrie._removeWord(word, index + 1) &&
      !subTrie.isWord && !Object.keys(subTrie.characters).length
        ? delete this.characters[char]
        : false;
    }

    subTrie.isWord = false;

    return !Object.keys(subTrie.characters).length ? delete this.characters[char] : false;
  }

  getWords(currentWord = '', words = []) {
    for (const char in this.characters) {
      if (Object.prototype.hasOwnProperty.call(this.characters, char)) {
        const nextWord = currentWord + char;
        const subTrie = this.characters[char];

        if (subTrie.isWord) words.push(nextWord);

        subTrie.getWords(nextWord, words);
      }
    }

    return words;
  }

  countWords() {
    return this.getWords().length;
  }

  findSequence(word, index = 0) {
    const char = word[index];
    const subTrie = this.characters[char];

    if (word.length - 1 > index && subTrie) return subTrie.findSequence(word, index + 1);

    return subTrie;
  }

  findWord(word) {
    const lastChar = this.findSequence(word);

    return lastChar && lastChar.isWord ? lastChar : undefined;
  }

  autoComplete(prefix) {
    const subTrie = this.findSequence(prefix);

    return subTrie ? subTrie.getWords(prefix) : [];
  }

  print() {
    console.log(this.getWords());
  }
}