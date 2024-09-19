let s = "babad"

function LongestPalindromicSubstring(s) {
    if (s.length === 0) return '';

    let start = 0, end = 0;
    function expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
            left = left - 1;
            right = right + 1;
        }
        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        let odd = expandAroundCenter(s, i, i);
        let even = expandAroundCenter(s, i, i + 1);
        let len = Math.max(odd, even);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
}

console.log(LongestPalindromicSubstring(s));

/*
THIS IS ABOUT DRY AND RUN THE CODE OF THIS LOGIC

Initialization:

let start = 0; let end = 0;
These variables keep track of the starting and ending indices of the longest palindromic substring found so far.
Function expandAroundCenter:

This function tries to expand a palindrome around a given center.
It takes three parameters:
s: the input string.
left: the left index of the center.
right: the right index of the center.
The while loop:
Expands outward from the center as long as the characters at left and right are equal and the indices are within bounds of the string.
Decreases left and increases right to expand the palindrome.
The return statement:
return right - left - 1;
After the loop, left and right are one position beyond the bounds of the palindrome.
The length of the palindrome is calculated by right - left - 1.
Dry Run with Input s = "babad"
Let's dry run the code with the input string "babad".

Initialization:

start = 0, end = 0.
Iteration (for loop):

Iteration 1 (i = 0):

Call expandAroundCenter(s, 0, 0).
left = 0, right = 0.
Expand: s[0] (b) == s[0] (b), update left = -1, right = 1.
Loop exits as left = -1 is out of bounds.
Return length: 1 - (-1) - 1 = 1.
Call expandAroundCenter(s, 0, 1).
left = 0, right = 1.
Loop exits as s[0] (b) != s[1] (a).
Return length: 1 - 0 - 1 = 0.
len = Math.max(1, 0) = 1.
Update start = 0 - Math.floor((1 - 1) / 2) = 0, end = 0 + Math.floor(1 / 2) = 0.
Iteration 2 (i = 1):

Call expandAroundCenter(s, 1, 1).
left = 1, right = 1.
Expand: s[1] (a) == s[1] (a), update left = 0, right = 2.
Expand: s[0] (b) == s[2] (b), update left = -1, right = 3.
Loop exits as left = -1 is out of bounds.
Return length: 3 - (-1) - 1 = 3.
Call expandAroundCenter(s, 1, 2).
left = 1, right = 2.
Loop exits as s[1] (a) != s[2] (b).
Return length: 2 - 1 - 1 = 0.
len = Math.max(3, 0) = 3.
Update start = 1 - Math.floor((3 - 1) / 2) = 0, end = 1 + Math.floor(3 / 2) = 2.
Iteration 3 (i = 2):

Call expandAroundCenter(s, 2, 2).
left = 2, right = 2.
Expand: s[2] (b) == s[2] (b), update left = 1, right = 3.
Expand: s[1] (a) == s[3] (a), update left = 0, right = 4.
Loop exits as s[0] (b) != s[4] (d).
Return length: 4 - 0 - 1 = 3.
Call expandAroundCenter(s, 2, 3).
left = 2, right = 3.
Loop exits as s[2] (b) != s[3] (a).
Return length: 3 - 2 - 1 = 0.
len = Math.max(3, 0) = 3.
Update start and end remain 0 and 2.
Iteration 4 (i = 3):

Call expandAroundCenter(s, 3, 3).
left = 3, right = 3.
Expand: s[3] (a) == s[3] (a), update left = 2, right = 4.
Loop exits as s[2] (b) != s[4] (d).
Return length: 4 - 2 - 1 = 1.
Call expandAroundCenter(s, 3, 4).
left = 3, right = 4.
Loop exits as s[3] (a) != s[4] (d).
Return length: 4 - 3 - 1 = 0.
len = Math.max(1, 0) = 1.
No change in start and end.
Iteration 5 (i = 4):

Call expandAroundCenter(s, 4, 4).
left = 4, right = 4.
Expand: s[4] (d) == s[4] (d), update left = 3, right = 5.
Loop exits as right = 5 is out of bounds.
Return length: 5 - 3 - 1 = 1.
Call expandAroundCenter(s, 4, 5).
left = 4, right = 5.
Loop exits as right = 5 is out of bounds.
Return length: 5 - 4 - 1 = 0.
len = Math.max(1, 0) = 1.
No change in start and end.
Final Result:

start = 0, end = 2.
s.substring(start, end + 1) returns "bab" or "aba".


Detailed Walkthrough of expandAroundCenter
Let's focus on the function expandAroundCenter for a specific iteration:

Example: expandAroundCenter(s, 1, 1)
Initial values:

left = 1, right = 1.
First iteration of the while loop:

Check condition: left >= 0 && right < s.length && s.charAt(left) === s.charAt(right).
1 >= 0 && 1 < 5 && s.charAt(1) === s.charAt(1) (i.e., true && true && 'a' === 'a').
Update left and right: left = 1 - 1 = 0, right = 1 + 1 = 2.
Second iteration of the while loop:

Check condition: left >= 0 && right < s.length && s.charAt(left) === s.charAt(right).
0 >= 0 && 2 < 5 && s.charAt(0) === s.charAt(2) (i.e., true && true && 'b' === 'b').
Update left and right: left = 0 - 1 = -1, right = 2 + 1 = 3.
Third iteration of the while loop:

Check condition: left >= 0 && right < s.length && s.charAt(left) === s.charAt(right).
-1 >= 0 is false.
Loop exits.
Return value:

Calculate palindrome length: right - left - 1 = 3 - (-1) - 1 = 3.
This returns a palindrome of length 3 centered at index 1 ("aba").

*/