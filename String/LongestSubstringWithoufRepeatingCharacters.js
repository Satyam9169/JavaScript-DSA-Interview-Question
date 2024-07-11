/**
 * @param {string} s
 * @return {number}
 */
// let s = "abcabcbb";
var lengthOfLongestSubstring = function (s) {
    let start = 0, maxLength = 0, n = s.length;
    let lastIndex = new Map();
    for (let end = 0; end < n; end++) {
        let char = s.charAt(end);
        if (lastIndex.has(char) && lastIndex.get(char) >= start) {
            start = lastIndex.get(char) + 1;
        }
        lastIndex.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};

// console.log(lengthOfLongestSubstring(s));
console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))


/*
Initialization:
n = s.length: n = 8
start = 0: This keeps track of the start of the current substring without repeating characters.
maxLength = 0: This keeps track of the maximum length of substrings found without repeating characters.
lastIndex = new Map(): This map will store the last index of each character encountered.
Iteration through the string:
We'll iterate through each character in the string using a for loop.

First iteration (end = 0):
char = s.charAt(0): char = 'a'
Since 'a' is not in lastIndex, we don't update start.
We add 'a' to lastIndex with its index: lastIndex.set('a', 0)
Update maxLength: maxLength = Math.max(0, 0 - 0 + 1) = 1
Second iteration (end = 1):
char = s.charAt(1): char = 'b'
Since 'b' is not in lastIndex, we don't update start.
We add 'b' to lastIndex with its index: lastIndex.set('b', 1)
Update maxLength: maxLength = Math.max(1, 1 - 0 + 1) = 2
Third iteration (end = 2):
char = s.charAt(2): char = 'c'
Since 'c' is not in lastIndex, we don't update start.
We add 'c' to lastIndex with its index: lastIndex.set('c', 2)
Update maxLength: maxLength = Math.max(2, 2 - 0 + 1) = 3
Fourth iteration (end = 3):
char = s.charAt(3): char = 'a'
'a' is in lastIndex and lastIndex.get('a') (which is 0) is greater than or equal to start (which is 0), so update start: start = lastIndex.get('a') + 1 = 1
Update the last index of 'a': lastIndex.set('a', 3)
Update maxLength: maxLength = Math.max(3, 3 - 1 + 1) = 3
Fifth iteration (end = 4):
char = s.charAt(4): char = 'b'
'b' is in lastIndex and lastIndex.get('b') (which is 1) is greater than or equal to start (which is 1), so update start: start = lastIndex.get('b') + 1 = 2
Update the last index of 'b': lastIndex.set('b', 4)
Update maxLength: maxLength = Math.max(3, 4 - 2 + 1) = 3
Sixth iteration (end = 5):
char = s.charAt(5): char = 'c'
'c' is in lastIndex and lastIndex.get('c') (which is 2) is greater than or equal to start (which is 2), so update start: start = lastIndex.get('c') + 1 = 3
Update the last index of 'c': lastIndex.set('c', 5)
Update maxLength: maxLength = Math.max(3, 5 - 3 + 1) = 3
Seventh iteration (end = 6):
char = s.charAt(6): char = 'b'
'b' is in lastIndex and lastIndex.get('b') (which is 4) is greater than or equal to start (which is 3), so update start: start = lastIndex.get('b') + 1 = 5
Update the last index of 'b': lastIndex.set('b', 6)
Update maxLength: maxLength = Math.max(3, 6 - 5 + 1) = 3
Eighth iteration (end = 7):
char = s.charAt(7): char = 'b'
'b' is in lastIndex and lastIndex.get('b') (which is 6) is greater than or equal to start (which is 5), so update start: start = lastIndex.get('b') + 1 = 7
Update the last index of 'b': lastIndex.set('b', 7)
Update maxLength: maxLength = Math.max(3, 7 - 7 + 1) = 3
Final Output:
After completing the loop, maxLength holds the length of the longest substring without repeating characters, which is 3.

Dry Run Summary:
Start: "abcabcbb"
Longest substring without repeating characters:
"abc" (length = 3)
Final output: 3
So, the function correctly returns 3 for the input "abcabcbb".
*/