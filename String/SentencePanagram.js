/*
Time Complexity: 𝑂(𝑛)
Space Complexity: 𝑂(1)

1832. Check if the Sentence Is Pangram
Solved
Easy
Topics
Companies
Hint
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, 
return true if sentence is a pangram, or false otherwise.

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false
 
Constraints:

1 <= sentence.length <= 1000
sentence consists of lowercase English letters.
*/
let sentence = "thequickbrownfoxjumpsoverthelazydog"
// let sentence = "leetcode";
function Sentence(sentence) {
    let uniqueAll = new Set();
    for (let i = 0; i < sentence.length; i++) {
        let element = sentence.charAt(i);
        if (element >= 'a' && element <= 'z') {
            uniqueAll.add(element)
        }
    }
    return uniqueAll.size === 26;
    // THIS IS FIRST APPROACH
    // return new Set(sentence).size === 26
}

console.log(Sentence(sentence))
// Note => set is autometically removed the dublicates from the string

// For more information visit at : https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/