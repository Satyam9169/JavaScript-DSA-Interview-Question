// Merge two string
let word1 = "abc",
  word2 = "pqr";
const mergeString = (word1, word2) => {
  let i = 0,
    j = 0,
    finalString = "";
  while (i < word1.length && j < word2.length) {
    if (i < word1.length) {
      finalString += word1.charAt(i);
      i = i + 1;
    }
    if (j < word2.length) {
      finalString += word2.charAt(j);
      j = j + 1;
    }
  }
  return finalString;
};

console.log(mergeString(word1, word2));
