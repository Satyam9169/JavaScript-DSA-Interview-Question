let s = "A man, a plan, a canal: Panama";
// output: true;
// Explanation: "amanaplanacanalpanama" is a palindrome.

function ValidPalindrome(s) {
    // This is second more optimised approach
    let cleanedString = '';
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9')) {
            cleanedString += char;
        } else if (s[i] >= 'A' && s[i] <= 'Z') {
            cleanedString += String.fromCharCode(char.charCodeAt(0) + 32);
        }
    }

    let start = 0;
    let end = cleanedString.length - 1;
    while (start <= end) {
        if (cleanedString[start] !== cleanedString[end]) { return false; }
        start = start + 1;
        end = end - 1;
    }
    return true;


    // This is first Optimised approach
    // s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // let cleanedString = s.split('').reverse().join('');
    // return s === cleanedString;
}

console.log(ValidPalindrome(s))

// for more information please visit : https://leetcode.com/problems/valid-palindrome/
