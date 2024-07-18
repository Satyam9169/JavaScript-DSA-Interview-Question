// 1st method
let number = [1,2,3,4,5]
let original_array = [];

for(let i = number.length - 1; i >= 0; i--){
    original_array.push(number[i])
}

console.log("Reversed Array : ");
console.log(original_array);

// 2nd method
// let number = [1,2,3,4,5]
// let original_array = [];

// console.log(" original_array : ")
// console.log(number);

// original_array = number.map((item, index) => number[number.length - 1 - index])
// console.log("Reversed Array: ");
// console.log(original_array);

// original_array = number.reduce((acc, item) => [item].concat(acc), [])
// console.log(original_array);