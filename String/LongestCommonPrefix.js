/*

Time Complexity = O(k * n);
Space Complexity = O(1);


14. Longest Common Prefix
Solved
Easy
Topics
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

const LongCommonPrefix = (str) => {
    if (str.length === 0) return "";
    if (str.length === 1) return str[0];

    let prefix = str[0];
    for (let i = 1; i < str.length; i++) {
        while (str[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length === 0) return "";
        }
    }
    return prefix;
}
let strs = ["flower","flow","flight"];
console.log(LongCommonPrefix())

/*
Dry Run of LongCommonPrefix(["flower","flow","flight"])
Step 1: Initial Setup

The input array is ["flower", "flow", "flight"].
prefix = "flower" (assume the first string is the common prefix).
Step 2: Iterate Through the Strings

Iteration 1: Compare "flower" with "flow"

i = 1, current string = "flow"
Check if "flow".indexOf("flower") === 0 → False (the string "flow" does not start with "flower").
Reduce prefix = "flower".substring(0, 6 - 1) = "flowe".
Check if "flow".indexOf("flowe") === 0 → False.
Reduce prefix = "flowe".substring(0, 5 - 1) = "flow".
Check if "flow".indexOf("flow") === 0 → True.
Prefix after this iteration: "flow".
Iteration 2: Compare "flow" with "flight"

i = 2, current string = "flight"
Check if "flight".indexOf("flow") === 0 → False (the string "flight" does not start with "flow").
Reduce prefix = "flow".substring(0, 4 - 1) = "flo".
Check if "flight".indexOf("flo") === 0 → False.
Reduce prefix = "flo".substring(0, 3 - 1) = "fl".
Check if "flight".indexOf("fl") === 0 → True.
Prefix after this iteration: "fl".
Step 3: End of Loop

The loop completes, and the final value of prefix is "fl".
Final Output
The longest common prefix of ["flower", "flow", "flight"] is "fl".

*/