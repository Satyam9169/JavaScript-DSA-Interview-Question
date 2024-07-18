// let num = 100;

// console.log("all numbers are : ");
// for(let i = 1; i<= num; i = i + 3){
//     console.log(i)
// }

let num = 100;
let result = [];

for (let i = 1; i <= num; i = i + 3) {
    result.push(i);
}

console.log("All numbers are: " + result.join(' '));
