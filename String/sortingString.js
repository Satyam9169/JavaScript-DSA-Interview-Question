// sort the string TC => O(n), SC => O(1);
let arr = "geeksforgeeks" ; // eeeefggkkorss
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
