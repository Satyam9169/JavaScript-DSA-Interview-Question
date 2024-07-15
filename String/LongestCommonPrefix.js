/*
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

console.log(LongCommonPrefix())

/*
The expression strs[i].indexOf(prefix) is used to check if the string prefix is a prefix of the string strs[i].

Explanation:
strs[i]: This refers to the current string in the array strs that we are examining.
indexOf(prefix): This method returns the index of the first occurrence of the specified
substring (in this case, prefix) within the string strs[i]. If the substring is not found, it returns -1.

In Context:
When used in the condition strs[i].indexOf(prefix) !== 0, it checks whether the string prefix is at the
beginning (index 0) of the string strs[i].

Detailed Breakdown:
indexOf(prefix): Looks for the first occurrence of prefix in strs[i].
If prefix is found at the beginning of strs[i], indexOf returns 0.
If prefix is not at the beginning, indexOf returns the index where it first appears
(which will be greater than 0), or -1 if it does not appear at all.

*/