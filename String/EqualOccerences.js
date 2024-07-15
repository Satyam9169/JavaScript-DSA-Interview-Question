/*
Time Complexity: O(n)
Space Complexity: O(1)

1941. Check if All Characters Have Equal Number of Occurrences
Solved
Easy
Topics
Companies
Hint
Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number
of occurrences (i.e., the same frequency).

Example 1:

Input: s = "abacbc"
Output: true
Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
Example 2:

Input: s = "aaabb"
Output: false
Explanation: The characters that appear in s are 'a' and 'b'.
'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

Constraints:
1 <= s.length <= 1000
s consists of lowercase English letters.
*/

// let s = "abacbc" // true
let s = "aaabb" // false
function EqualOccerences(s) {
    let hashmap = {};
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (hashmap[char] !== undefined) {
            hashmap[char]++;
        } else {
            hashmap[char] = 1;
        }
    }

    let occerences = Object.values(hashmap); //this is the way to treverse over values of hashmap
    // here we are treversing over values of hashmap
    for (let i = 0; i < occerences.length; i++) {
        if (occerences[i] !== occerences[0]) {
            return false;
        }
    }
    return true;

    /*
    THIS IS ALSO A UNIQUE APPROACH
    Create a hashmap to store character counts
    let hashmap = {};
    
    Count the occurrences of each character
    for (let char of s) {
        hashmap[char] = (hashmap[char] || 0) + 1;
    }
    
     Get the frequency of the first character
    let freq = hashmap[s.charAt(0)];
    
     Check if all frequencies are the same
    for (let count of Object.values(hashmap)) {
        if (count !== freq) {
            return false;
        }
    }
    
    return true;
    */
}
console.log(EqualOccerences(s))

/*
Dry Run with s = "aabbcc"
Initialization:

hashmap = {}
Counting the occurrences:

Iteration 1: char = 'a'
hashmap['a'] = (hashmap['a'] || 0) + 1
hashmap = { 'a': 1 }
Iteration 2: char = 'a'
hashmap['a'] = (hashmap['a'] || 0) + 1
hashmap = { 'a': 2 }
Iteration 3: char = 'b'
hashmap['b'] = (hashmap['b'] || 0) + 1
hashmap = { 'a': 2, 'b': 1 }
Iteration 4: char = 'b'
hashmap['b'] = (hashmap['b'] || 0) + 1
hashmap = { 'a': 2, 'b': 2 }
Iteration 5: char = 'c'
hashmap['c'] = (hashmap['c'] || 0) + 1
hashmap = { 'a': 2, 'b': 2, 'c': 1 }
Iteration 6: char = 'c'
hashmap['c'] = (hashmap['c'] || 0) + 1
hashmap = { 'a': 2, 'b': 2, 'c': 2 }
Get the frequency of the first character:

freq = hashmap[s.charAt(0)]
freq = hashmap['a']
freq = 2
Check if all frequencies are the same:

Object.values(hashmap) = [2, 2, 2]
Iteration 1: count = 2
count === freq (2 === 2) -> continue
Iteration 2: count = 2
count === freq (2 === 2) -> continue
Iteration 3: count = 2
count === freq (2 === 2) -> continue
Since all the counts are equal, the function returns true.
*/