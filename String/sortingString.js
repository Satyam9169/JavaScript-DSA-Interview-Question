// sort the string TC => O(n), SC => O(1);
let arr = "geeksforgeeks" ; // eeeefggkkorss
//let arr = "edsab"; // abdes
const sortString = (arr) => {
    let count = new Array(26).fill(0);
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let char = arr.charCodeAt(i);
        count[char - 97]++;  // here we are counting the frequency of string
    }
    let sortedString = '';
    for (let i = 0; i < 26; i++) {
        sortedString += String.fromCharCode(i + 97).repeat(count[i]); //  Here’s why using repeat is beneficial:
                                                                      //  Conciseness: Using repeat makes the code shorter and easier to read.
                                                                      //  Efficiency: repeat is optimized for performance in modern JavaScript engines,
                                                                      //  making it an efficient way to build a string.
                                                                      //  However, if you prefer to avoid repeat, you can achieve the same result using 
                                                                      // a loop. Here's an alternative version of the function without using repeat:
    }
    return sortedString;
}

console.log(sortString(arr));
