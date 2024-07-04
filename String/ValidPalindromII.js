// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false


// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

let s = 'abca'
function ValidPalindromII(s) {
    let start = 0, end = s.length - 1;
    while (start <= end) {
        if (s[start] !== s[end]) {
            return checkPalindrom(s, start + 1, end) || checkPalindrom(s, start, end - 1);
        } else {
            start = start + 1;
            end = end - 1;
        }
    }
    return true;
}

const checkPalindrom = (s, start, end) => {
    // start = 0, end = s.length - 1;
    while (start <= end) {
        if (s.charAt(start) !== s.charAt(end)) { return false };
        start = start + 1;
        end = end - 1;
    }
    return true;
}
console.log(ValidPalindromII(s));



















