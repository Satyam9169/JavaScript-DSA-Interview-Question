/*
541. Reverse String II
Solved
Easy
Topics
Companies
Given a string s and an integer k,
reverse the first k characters for every 2k characters counting from the start of the string.
If there are fewer than k characters left, reverse all of them. 
If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"
 

Constraints:

1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 104
*/

let str = "abcdefg",
  k = 2;

function ReverseString(str, k) {
  let arr = str.split("");
  function reverse(start, end) {
    while (start <= end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start = start + 1;
      end = end - 1;
    }
  }

  for (let i = 0; i < str.length; i += 2 * k) {
    end = Math.min(i + k - 1, arr.length - 1);
    reverse(i, end);
  }
  return arr.join("");
}

console.log(ReverseString(str, k));
