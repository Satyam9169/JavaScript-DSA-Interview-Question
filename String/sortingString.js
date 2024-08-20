// sort the string TC => O(n), SC => O(1);
let arr = "geeksforgeeks"; // eeeefggkkorss
//let arr = "edsab"; // abdes
const sortString = (arr) => {
    let count = new Array(26).fill(0);
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let char = arr.charCodeAt(i);
        count[char - 97]++;  // here we are counting the frequency of string
        // The number 97 is the ASCII value of the lowercase letter 'a'. 
        // By subtracting 97 from the ASCII value of any lowercase letter,
        // you effectively map the letters 'a' to 'z' to the range 0 to 25. This is because:
        // The ASCII value of 'a' is 97, so arr.charCodeAt(i) - 97 for 'a' is 97 - 97 = 0.
        // The ASCII value of 'b' is 98, so arr.charCodeAt(i) - 97 for 'b' is 98 - 97 = 1.
        //   And so on, until:
        // The ASCII value of 'z' is 122, so arr.charCodeAt(i) - 97 for 'z' is 122 - 97 = 25.
    }
    let sortedString = '';
    for (let i = 0; i < 26; i++) {
        sortedString += String.fromCharCode(i + 97).repeat(count[i]); //  Here’s why using repeat is beneficial:
        //  Conciseness: Using repeat makes the code shorter and easier to read.
        //  Efficiency: repeat is optimized for performance in modern JavaScript engines,
        //  making it an efficient way to build a string.
        //  However, if you prefer to avoid repeat, you can achieve the same result using 
        // a loop.
    }
    return sortedString;
}

console.log(sortString(arr));

/**
Dry-Run Example
Input: S = "geeksforgeeks"

Initial Setup
n = 13 (length of the string)
maxLength = 0
start = 0
lastIndex = new Map()
Iteration Over the String
First Iteration (end = 0):

char = 'g'
'g' is not in lastIndex
Update lastIndex to { 'g': 0 }
Update maxLength = max(0, 0 - 0 + 1) = 1
Second Iteration (end = 1):

char = 'e'
'e' is not in lastIndex
Update lastIndex to { 'g': 0, 'e': 1 }
Update maxLength = max(1, 1 - 0 + 1) = 2
Third Iteration (end = 2):

char = 'e'
'e' is in lastIndex and lastIndex.get('e') = 1 >= start = 0
Update start = lastIndex.get('e') + 1 = 2
Update lastIndex to { 'g': 0, 'e': 2 }
Update maxLength = max(2, 2 - 2 + 1) = 2
Fourth Iteration (end = 3):

char = 'k'
'k' is not in lastIndex
Update lastIndex to { 'g': 0, 'e': 2, 'k': 3 }
Update maxLength = max(2, 3 - 2 + 1) = 2
Fifth Iteration (end = 4):

char = 's'
's' is not in lastIndex
Update lastIndex to { 'g': 0, 'e': 2, 'k': 3, 's': 4 }
Update maxLength = max(2, 4 - 2 + 1) = 3
Sixth Iteration (end = 5):

char = 'f'
'f' is not in lastIndex
Update lastIndex to { 'g': 0, 'e': 2, 'k': 3, 's': 4, 'f': 5 }
Update maxLength = max(3, 5 - 2 + 1) = 4
Seventh Iteration (end = 6):

char = 'o'
'o' is not in lastIndex
Update lastIndex to { 'g': 0, 'e': 2, 'k': 3, 's': 4, 'f': 5, 'o': 6 }
Update maxLength = max(4, 6 - 2 + 1) = 5
Eighth Iteration (end = 7):

char = 'r'
'r' is not in lastIndex
Update lastIndex to { 'g': 0, 'e': 2, 'k': 3, 's': 4, 'f': 5, 'o': 6, 'r': 7 }
Update maxLength = max(5, 7 - 2 + 1) = 6
Ninth Iteration (end = 8):

char = 'g'
'g' is in lastIndex and lastIndex.get('g') = 0 < start = 2
Update lastIndex to { 'g': 8, 'e': 2, 'k': 3, 's': 4, 'f': 5, 'o': 6, 'r': 7 }
Update maxLength = max(6, 8 - 2 + 1) = 7
Tenth Iteration (end = 9):

char = 'e'
'e' is in lastIndex and lastIndex.get('e') = 2 >= start = 2
Update start = lastIndex.get('e') + 1 = 3
Update lastIndex to { 'g': 8, 'e': 9, 'k': 3, 's': 4, 'f': 5, 'o': 6, 'r': 7 }
Update maxLength = max(7, 9 - 3 + 1) = 7
Eleventh Iteration (end = 10):

char = 'e'
'e' is in lastIndex and lastIndex.get('e') = 9 >= start = 3
Update start = lastIndex.get('e') + 1 = 10
Update lastIndex to { 'g': 8, 'e': 10, 'k': 3, 's': 4, 'f': 5, 'o': 6, 'r': 7 }
Update maxLength = max(7, 10 - 10 + 1) = 7
Twelfth Iteration (end = 11):

char = 'k'
'k' is in lastIndex and lastIndex.get('k') = 3 < start = 10
Update lastIndex to { 'g': 8, 'e': 10, 'k': 11, 's': 4, 'f': 5, 'o': 6, 'r': 7 }
Update maxLength = max(7, 11 - 10 + 1) = 7
Thirteenth Iteration (end = 12):

char = 's'
's' is in lastIndex and lastIndex.get('s') = 4 < start = 10
Update lastIndex to { 'g': 8, 'e': 10, 'k': 11, 's': 12, 'f': 5, 'o': 6, 'r': 7 }
Update maxLength = max(7, 12 - 10 + 1) = 7
Final Result
The length of the longest substring without repeating characters is maxLength = 7.
The longest substring without repeating characters is "eksforg".

This dry run confirms that the algorithm works correctly and maintains a linear time complexity 
𝑂(𝑁)
O(N), with auxiliary space complexity 
𝑂(𝐾)
O(K) where 𝐾
K is a constant (26 for lowercase letters).
*/
