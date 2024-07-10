let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagram(strs) {
    let hashmap = {};
    for (let word of strs) {
        let count = new Array(256).fill(0);

        for (let char of word) {
            let index = char.charCodeAt(0) - 97;
            count[index]++;
        }

        const key = count.join('#');

        if (hashmap[key]) {
            hashmap[key].push(word)
        }
        else {
            hashmap[key] = [word];
        }
    }
    return Object.values(hashmap);
}

console.log(groupAnagram(strs));

/*
THIS IS ABOUT DRY AND RUN OF THIS LOGIC

Step-by-Step Execution:
Initialization:

Create an empty hashmap: hashmap = {}.
First Iteration (word = "eat"):

Initialize count array with 26 zeros: count = [0, 0, 0, ..., 0] (26 zeros).
Count frequency of each character in "eat":
'e': count[4]++ → count = [0, 0, 0, 0, 1, 0, ..., 0]
'a': count[0]++ → count = [1, 0, 0, 0, 1, 0, ..., 0]
't': count[19]++ → count = [1, 0, 0, 0, 1, 0, ..., 1]
Convert count array to a string key: key = "1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0#0"
Check if key exists in hashmap:
hashmap[key] does not exist, so initialize it: hashmap[key] = ["eat"].
Current hashmap: {"1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0#0": ["eat"]}.
Second Iteration (word = "tea"):

Initialize count array with 26 zeros: count = [0, 0, 0, ..., 0] (26 zeros).
Count frequency of each character in "tea":
't': count[19]++ → count = [0, 0, 0, ..., 1, 0, ..., 0]
'e': count[4]++ → count = [0, 0, 0, 0, 1, 0, ..., 1, 0, ..., 0]
'a': count[0]++ → count = [1, 0, 0, 0, 1, 0, ..., 1, 0, ..., 0]
Convert count array to a string key: key = "1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0#0"
Check if key exists in hashmap:
hashmap[key] exists, so push "tea" to the array: hashmap[key].push("tea").
Current hashmap: {"1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0#0": ["eat", "tea"]}.
Third Iteration (word = "tan"):

Initialize count array with 26 zeros: count = [0, 0, 0, ..., 0] (26 zeros).
Count frequency of each character in "tan":
't': count[19]++ → count = [0, 0, 0, ..., 1, 0, ..., 0]
'a': count[0]++ → count = [1, 0, 0, ..., 1, 0, ..., 0]
'n': count[13]++ → count = [1, 0, 0, ..., 1, 0, ..., 1, ..., 0]
Convert count array to a string key: key = "1#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#1#0#0#0#0#0#0#0"
Check if key exists in hashmap:
hashmap[key] does not exist, so initialize it: hashmap[key] = ["tan"].
Current hashmap:
json
Copy code
{
    "1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0#0": ["eat", "tea"],
    "1#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#1#0#0#0#0#0#0#0": ["tan"]
}
Fourth Iteration (word = "ate"):

Initialize count array with 26 zeros: count = [0, 0, 0, ..., 0] (26 zeros).
Count frequency of each character in "ate":
'a': count[0]++ → count = [1, 0, 0, ..., 0]
't': count[19]++ → count = [1, 0, 0, ..., 1, ..., 0]
'e': count[4]++ → count = [1, 0, 0, 0, 1, ..., 1, ..., 0]
Convert count array to a string key: key = "1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0#0"
Check if key exists in hashmap:
hashmap[key] exists, so push "ate" to the array: hashmap[key].push("ate").
Current hashmap:
json
Copy code
{
    "1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0#0": ["eat", "tea", "ate"],
    "1#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#1#0#0#0#0#0#0#0": ["tan"]
}
Fifth Iteration (word = "nat"):

Initialize count array with 26 zeros: count = [0, 0, 0, ..., 0] (26 zeros).
Count frequency of each character in "nat":
'n': count[13]++ → count = [0, 0, 0, ..., 1, ..., 0]
'a': count[0]++ → count = [1, 0, 0, ..., 1, ..., 0]
't': count[19]++ → count = [1, 0, 0, ..., 1, ..., 1, ..., 0]
Convert count array to a string key: key = "1#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#1#0#0#0#0#0#0#0"
Check if key exists in hashmap:
hashmap[key] exists, so push "nat" to the array: hashmap[key].push("nat").
Current hashmap:
json
Copy code
{
    "1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0#0": ["eat", "tea", "ate"],
    "1#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#1#0#0#0#0#0#0#0": ["tan", "nat"]
}
Sixth Iteration (word = "bat"):

Initialize count array with 26 zeros: count = [0, 0, 0, ..., 0] (26 zeros).
Count frequency of each character in "bat":
'b': count[1]++ → count = [0, 1, ..., 0]
'a': count[0]++ → count = [1, 1, ..., 0]
't': count[19]++ → count = [1, 1, ..., 1, ..., 0]
Convert count array to a string key: key = "1#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0#0"
Check if key exists in hashmap:
hashmap[key] does not exist, so initialize it: hashmap[key] = ["bat"].
Current hashmap:
json
Copy code
{
    "1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0#0": ["eat", "tea", "ate"],
    "1#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#1#0#0#0#0#0#0#0": ["tan", "nat"],
    "1#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0#0": ["bat"]
}
Collect All Values from hashmap:

Use Object.values(hashmap) to collect all arrays of anagrams:
Result: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]].
Final Output:
javascript
Copy code
[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
This step-by-step dry run demonstrates how the function groups anagrams by counting character frequencies, creating unique keys, and using a hashmap to collect and return the groups of anagrams.


what is the meaning of this line
hashmap[key] = [word];
ChatGPT
In the context of the groupAnagrams function, the line hashmap[key] = [word]; is responsible for initializing a new entry in the hashmap object or updating an existing entry with an array containing the current word.

Let's break down what this line does:

hashmap[key]: This accesses or creates a property in the hashmap object using the key variable as the property name.

= [word];: This assigns an array containing the current word to the property specified by key in hashmap.

Explanation:
Initialization: If hashmap[key] does not exist yet (meaning this is the first occurrence of this specific character frequency pattern), hashmap[key] is initialized with an array containing word. For example, if key represents the character frequency pattern of the word "eat", which is something like "1#0#0#0#1#0...0", hashmap[key] would initially be set to ["eat"].

Updating Existing Entry: If hashmap[key] already exists (meaning there are other words that share the same character frequency pattern), word is appended to the existing array. This ensures all words that are anagrams (having the same character frequency pattern) are grouped together under the same key.

Example:
If we have the input strs = ["eat", "tea", "tan", "ate", "nat", "bat"], after processing, hashmap might look like this:

javascript
Copy code
{
    "1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0#0": ["eat", "tea", "ate"],
    "1#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#1#0#0#0#0#0#0#0": ["tan", "nat"],
    "1#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0#0": ["bat"]
}
Here:

"1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0#0" represents the character frequency pattern of "eat", "tea", and "ate".
"1#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#1#0#0#0#0#0#0#0" represents the character frequency pattern of "tan" and "nat".
"1#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0#0" represents the character frequency pattern of "bat".
Thus, hashmap[key] = [word]; ensures that words with the same character frequency pattern (anagrams) are grouped together in the final output.


*/