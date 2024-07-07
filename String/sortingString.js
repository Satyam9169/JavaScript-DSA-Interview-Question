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
        sortedString += String.fromCharCode(i + 97).repeat(count[i]); // 
    }
    return sortedString;
}

console.log(sortString(arr));