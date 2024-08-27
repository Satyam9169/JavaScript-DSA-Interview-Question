/* 
1. Reverse each word of a given sentence. E.g., Hello kaise ho --> olleh esiak olleh

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

*/





