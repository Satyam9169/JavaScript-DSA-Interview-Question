// Time complexity => O(n), space complexity => O(min(n,m))
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
Iteration 1: end = 0
char = 'a'
'a' is not in lastIndex.
Update lastIndex: {'a' => 0}
Calculate maxLength: maxLength = max(0, 0 - 0 + 1) = 1
Iteration 2: end = 1
char = 'b'
'b' is not in lastIndex.
Update lastIndex: {'a' => 0, 'b' => 1}
Calculate maxLength: maxLength = max(1, 1 - 0 + 1) = 2
Iteration 3: end = 2
char = 'c'
'c' is not in lastIndex.
Update lastIndex: {'a' => 0, 'b' => 1, 'c' => 2}
Calculate maxLength: maxLength = max(2, 2 - 0 + 1) = 3
Iteration 4: end = 3
char = 'a'
'a' is in lastIndex and lastIndex.get('a') >= start (i.e., 0 >= 0).
Move start to 1 (lastIndex.get('a') + 1 = 0 + 1).
Update lastIndex: {'a' => 3, 'b' => 1, 'c' => 2}
maxLength remains 3 because the current length is not greater: maxLength = max(3, 3 - 1 + 1) = 3
Iteration 5: end = 4
char = 'b'
'b' is in lastIndex and lastIndex.get('b') >= start (i.e., 1 >= 1).
Move start to 2 (lastIndex.get('b') + 1 = 1 + 1).
Update lastIndex: {'a' => 3, 'b' => 4, 'c' => 2}
maxLength remains 3: maxLength = max(3, 4 - 2 + 1) = 3
Iteration 6: end = 5
char = 'c'
'c' is in lastIndex and lastIndex.get('c') >= start (i.e., 2 >= 2).
Move start to 3 (lastIndex.get('c') + 1 = 2 + 1).
Update lastIndex: {'a' => 3, 'b' => 4, 'c' => 5}
maxLength remains 3: maxLength = max(3, 5 - 3 + 1) = 3
Iteration 7: end = 6
char = 'b'
'b' is in lastIndex and lastIndex.get('b') >= start (i.e., 4 >= 3).
Move start to 5 (lastIndex.get('b') + 1 = 4 + 1).
Update lastIndex: {'a' => 3, 'b' => 6, 'c' => 5}
maxLength remains 3: maxLength = max(3, 6 - 5 + 1) = 2
Iteration 8: end = 7
char = 'b'
'b' is in lastIndex and lastIndex.get('b') >= start (i.e., 6 >= 5).
Move start to 7 (lastIndex.get('b') + 1 = 6 + 1).
Update lastIndex: {'a' => 3, 'b' => 7, 'c' => 5}
maxLength remains 3: maxLength = max(3, 7 - 7 + 1) = 1
*/
