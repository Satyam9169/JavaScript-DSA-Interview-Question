/* 
1. Reverse each word of a given sentence. E.g., Hello kaise ho --> olleh esiak olleh

let string = "Hello kaise ho";
let reverseString = string.split(" ").map((word) => {
  return word.split("").reverse().join("")
}).join(" ");
console.log(reverseString);

TRY WITHOUT USING INBUILT FUNCTION
let s = 'Lovely Professional University'
output : ylevoL lanoisseforP ytisrevinU
function ReverseEachWord(s) {
 let word = s.split(' ');
    function reverse(arr) {
        let str = arr.split('');
        let start = 0, end = str.length - 1;
        while (start <= end) {
            let temp = str[start];
            str[start] = str[end];
            str[end] = temp;
            start = start + 1;
            end = end - 1;
        }
        return str.join('');
    }
    for (let i = 0; i < word.length; i++) {
        word[i] = reverse(word[i]);
    }
    return word.join(' ');
}
console.log(ReverseEachWord(s))

2. How to check if an object is an array or not? Provide some code.
let arr = [];
if(Array.isArray(arr)){
    console.log("given object is an array")
}else{
    console.log("given object is not an array")
}

3. How to empty an array in javascript? Do not reset it to a new array, 
   and do not loop through to pop each value.
   let arr = [];
   arr.length = 0;
   console.log(arr)

4. How would you check if a number is an integer?
let num = 12.2;
if(Number.isInteger(num)){
    console.log("integer")
}else{
    console.log("not a integer")
}

5. find the combination of two arrays
const combineArray = (arr1, arr2) => arr1.concat(arr2);
console.log(combineArray([1, 2, 3], [3, 4, 6]));

6. Write a Javascript function that reverse a number
1st way
const reverseNum = (num) => {
    let rev = 0;
    while(num !== 0){
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    return rev;
}
console.log(reverseNum(12345))

2nd way
let num = 123;
let reverse = Number(num.toString().split('').reverse().join(''))
console.log(reverse)

7. Write a javascript function that checks whether a passed string
 is palindrome or not
 let str = "abcba";
 
 const checkPalin = (str) => {
     let start = 0, end = str.length - 1;
     while (start <= end) {
         if (str[start] !== str[end]) {
             console.log("not a palindrome");
             return;
         }
         start = start + 1;
         end = end - 1;
     }
     console.log("palindrome")
 }
 
 checkPalin(str)

 9. Write a js function that accepts a string as a parameter and conversts
  the first letter of each word of the string in upper case.
*/

let string = "lovely professional university"
const captilizedFirstLetter = (string) => {
    const allWord = string.split(" ").map((str) => {
        const firsLetter = str.charAt(0).toUpperCase();
        return firsLetter + str.slice(1);
    })
    return allWord.join(" ");
}
console.log(captilizedFirstLetter(string));






