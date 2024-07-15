/*
Time Complexity : O(n);
Space Complexity : O(1);

8. String to Integer (atoi)
Solved
Medium
Topics
Companies
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

Whitespace: Ignore any leading whitespace (" ").
Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result.

 

Example 1:

Input: s = "42"

Output: 42

Explanation:

The underlined characters are what is read in and the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
Example 2:

Input: s = " -042"

Output: -42

Explanation:

Step 1: "   -042" (leading whitespace is read and ignored)
            ^
Step 2: "   -042" ('-' is read, so the result should be negative)
             ^
Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
               ^
Example 3:

Input: s = "1337c0d3"

Output: 1337

Explanation:

Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
         ^
Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
             ^
Example 4:

Input: s = "0-1"

Output: 0

Explanation:

Step 1: "0-1" (no characters read because there is no leading whitespace)
         ^
Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
          ^
Example 5:

Input: s = "words and 987"

Output: 0

Explanation:

Reading stops at the first non-digit character 'w'.

Constraints:

0 <= s.length <= 200
s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

*/


const ATOI = (s) => {
    s = s.trim();
    if (s.length === "") return 0;

    // Here we are checking for the sign
    let sign = 1, index = 0;
    if (s[index] === '-' || s[index] === '+') {
        sign = (s[index] === '-') ? -1 : 1;
        index = index + 1;
    }

    //Parse digits and build the numbers
    let result = 0;
    while (index < s.length && isDigit(s[index])) {
        result = result * 10 + parseInt(s[index], 10);
        index++;

        if (sign === 1 && result > Math.pow(2, 31) - 1) {
            return Math.pow(2, 31) - 1;
        } else if (sign === -1 && result > Math.pow(2, 32)) {
            return -Math.pow(2, 31);
        }
    }

    return result * sign
}

const isDigit = char => /^[0-9]$/.test(char);

console.log(ATOI("words and 987"));
console.log(ATOI("1337c0d3"));
console.log(ATOI(" -042"));
console.log(ATOI("42"));
console.log(ATOI("0-1"));

/*
Dry Run:
Input: " -42"
Trim the Input String:

str = str.trim();
Result: str = "-42"
Check for Empty String:

if (str === "") return 0;
Result: The string is not empty, so we proceed.
Check for Sign (+/-):

Initialize sign = 1 and index = 0.
Check if the first character is '+' or '-':
javascript
Copy code
if (str[index] === '+' || str[index] === '-') {
    sign = (str[index] === '-') ? -1 : 1;
    index++;
}
Result: sign = -1 and index = 1 (since the first character is '-').
Parse Digits and Build the Number:

Initialize result = 0.
Enter the while loop to parse digits:
javascript
Copy code
while (index < str.length && isDigit(str[index])) {
    result = result * 10 + parseInt(str[index], 10);
    index++;
    
    // Handle overflow
    if (sign === 1 && result > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    } else if (sign === -1 && result > Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    }
}
First Iteration (index = 1):
char = '4'
result = 0 * 10 + 4 = 4
Increment index to 2.
Second Iteration (index = 2):
char = '2'
result = 4 * 10 + 2 = 42
Increment index to 3 (end of string).
Loop Exit: index = 3, which is equal to str.length.
Return the Final Result:

Return result * sign:

return result * sign;

Final Output:
javascript
Copy code
console.log(myAtoi("   -42")); // Output: -42
Complexity Analysis:
Time Complexity:

Trimming the string takes : O(n) time, where 
𝑛
n is the length of the input string.
The while loop iterates through the string, which also takes 
O(n) time.
Overall time complexity: O(n).
Space Complexity: O(1)

The function uses a constant amount of extra space.
Overall space complexity: O(1).
This step-by-step dry run demonstrates how the myAtoi
function processes the input string " -42" and converts
it to the integer -42.

*/