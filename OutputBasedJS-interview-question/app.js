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
  let string = "lovely professional university"
  const captilizedFirstLetter = (string) => {
      const allWord = string.split(" ").map((str) => {
          const firsLetter = str.charAt(0).toUpperCase();
          return firsLetter + str.slice(1);
      })
      return allWord.join(" ");
  }
  console.log(captilizedFirstLetter(string));


MyQ. What is the difference between slice, substring and substr.
Parameters:
slice() and substring() take startIndex and endIndex (not included).
substr() takes startIndex and length.
Example

let str = "hello bhai kaise ho"
console.log(str.slice(3, 6));
console.log(str.substring(3, 6));
console.log(str.substr(2, 6))

10 - write a js function which accepts an argument and returns the type
Note: There are six possible values that typeof returns : object, boolean,
function, number, string, and undefined.

function giveType(arg){
    return typeof arg;
}
console.log(giveType([]))

In JavaScript, typeof is an operator that returns a string indicating the type of the operand.
When you use typeof on an array, it returns "object" because arrays in JavaScript are indeed a
type of object.

Objects: In JavaScript, almost everything is an object. Objects are collections of properties 
and values. Arrays are a special type of object that are used to store ordered collections of values.

Arrays: While arrays are technically objects, they have special properties and methods that 
allow them to function as arrays. However, they still inherit from the Object prototype, 
which is why typeof an array returns "object".

11. Write a javascript function to get the number of occurrences of each
    letter in specified string.
    
    const FindOccurence = (str) => {
        let map = new Map();
        for(let num of str){
            if(map.has(num)){
                map.set(num, map.get(num) + 1);
            }else{
                map.set(num, 1);
            }
        }
        return map;
    }
    console.log(FindOccurence("alpha"));

12. Loop an array and add all members of it.
let arr = [4,8,9,2,1];
const ArraySum = (arr) => {
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}

console.log(ArraySum(arr))

13. In an array of numbers
and strings, only add those numbers which are not strings.
let arr = ["alpha", 223, "beta", 345, 345, "dkj"];
const FindNumber = (arr) => {
    let sum = 0;
    for(let num of arr){
        if(typeof num === 'number'){
            sum += num;
        }
    }
    return sum;
}
console.log(FindNumber(arr))

14. loop an array of objects
and remove all objects which don't have gender's value male
const arr = [
  { name: "manas", gender: "male" },
  { name: "mansi", gender: "female" },
  { name: "muskan", gender: "female" },
  { name: "harshit", gender: "female" },
  { name: "random", gender: "other" },
];
const maleArr = arr.filter(obj => obj.gender === "male")
console.log(maleArr)

15. Write a js function to clone an array
a = [1,2,3,4];
b = a; 
this not clones the array, it takes the reference of array


Method-1 
function cloneArr(arr){
    return [...arr];
}
const arr = [1,2,3,4];
const newArr = cloneArr(arr);
console.log(newArr);

Method-2
const CloneArr = (arr) => {
    arr.map(ele => ele);
    return arr;
}

const arr = [1,2,3,4];
const newArr = CloneArr(arr);
console.log(newArr);

M-3
function CloneArr = (arr) => {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i])
    }
    return newArr;    
}
let arr = [1,2,3,4,5]
console.log(CloneArr(arr));

17. write a javascript function to get the last element of an array.
passing a parameter 'n' will return the last 'n' elements of the array.
function retrieveFromLast(arr, n = 1){
    if(n > arr.length){
        console.log(n + "not a element in an array");
        return;
    }
    for(let i = 0; i < n; i++){
        console.log(arr[arr.length - i  - 1])
    }
}
retrieveFromLast([1, 3, 5, 8], 3);

18. write a javascript program to find the most frequent item of an array.

const mostFrequent = (arr) => {
   let freq = {};
   for(let i = 0; i < arr.length; i++){
    if(freq[arr[i]]){
        freq[arr[i]]++;
    }else{
        freq[arr[i]] = 1;
     }
   }

   let maxFreq = Math.max(...Object.values(freq));
   let mostFrequentElements = Objects.keys(freq).filter(key => freq[key] === maxFreq);
   return mostFrequentElements;
}

console.log(mostFrequent([1, 2, 4, 7, 3, 4, 4, 3, 2, 2, 3, 3, 2]))

19. write a js program to shuffle an array.
This is the process of when n value is given
function shuffle(arr, n){
    let len = arr.length;
    let array = new Array(n * 2);
    let j = 0;
    for(let i = 0; i < len; i++){
        array[j] = arr[i];
        j++;
        array[j] = arr[n + i];
        j++;
    }
    return array;
}
console.log(shuffle([1,2,3,4,5,6], 3))
output = [1, 4, 2, 5, 3, 6]
This is when interviewer said to randomly suffle the array
*/








