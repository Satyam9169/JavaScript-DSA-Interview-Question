// INITIAL OF 2-D MATRIX
// HOW TO ACCESS THE MATRIX
// let MathScore = [
//     ['satyam sir', 20, 60, 'A'],
//     ['amar sir', 10, 52, 'B'],
//     ['anuj sir', 5, 24, 'F'],
//     ['naman sir', 28, 43, 'A'],
//     ['sunil sir', 16, 51, 'B']
// ];
// console.log(MathScore[4][0]);

// SUM of the matrix of all element
// let numberArr = [
//     [10, 20, 60],
//     [8, 10, 52],
//     [15, 5, 24],
//     [26, 28, 43],
//     [12, 16, 51]
// ];

// let sum = 0;
// for (let i = 0; i < numberArr.length; i++) {
//     for (let j = 0; j < numberArr[i].length; j++) {
//         sum += numberArr[i][j];
//     }
// }

// console.log('Sum of the matrix : ' + sum)

// How to manipulate of 2-d array
// let MathScore = [
//     ["John Doe", 20, 60, "A"],
//     ["Jane Doe", 10, 52, "B"],
//     ["Petr Chess", 5, 24, "F"],
//     ["Ling Jess", 28, 43, "A"],
//     ["Ben Liard", 16, 51, "B"],
//   ];

//   MathScore.push(['satyam ag', 10, 25, "S"]); // this added from last from last row
//   MathScore.unshift(['shivam ag', 20, 35, "T"]) // this is add the element from beginning in row

//   console.log(MathScore)


// How add score of both marks

// let MathScore = [
//     ["John Doe", 20, 60, "A"],
//     ["Jane Doe", 10, 52, "B"],
//     ["Petr Chess", 5, 24, "F"],
//     ["Ling Jess", 28, 43, "A"],
//     ["Ben Liard", 16, 51, "B"]
// ];

// MathScore.forEach((element) => {
//     let totalScore = element[1] + element[2];
//     element.push(totalScore);
// })
//console.log(MathScore); // total score added in new column

// How to remove the element from matrix
// let MathScore = [
//     ["John Doe", 20, 60, "A"],
//     ["Jane Doe", 10, 52, "B"],
//     ["Petr Chess", 5, 24, "F"],
//     ["Ling Jess", 28, 43, "A"],
//     ["Ben Liard", 16, 51, "B"]
//   ];

//MathScore.pop(); // this popped from last
//MathScore.shift(); // this popped from beginning
//console.log(MathScore)

// You can also remove elements from each array element:
// let MathScore = [
//     ["John Doe", 20, 60, "A"],
//     ["Jane Doe", 10, 52, "B"],
//     ["Petr Chess", 5, 24, "F"],
//     ["Ling Jess", 28, 43, "A"],
//     ["Ben Liard", 16, 51, "B"]
//   ];

//   MathScore.forEach((score) => {
//     score.pop();
//   })
    // let's understand with for loop for better understanding
    // for(let i = 0; i < MathScore.length; i++){
        // MathScore[i].pop()
        // 1) from pop => will remove the element
        // 2) i => i is indicating to each row's
        // 3) that's why it is removing the element from last of each row's
    // }
//   console.log(MathScore)




// splice() method to remove array elements from specific positions:
let MathScore = [
    ["John Doe", 20, 60, "A"],
    ["Jane Doe", 10, 52, "B"],
    ["Petr Chess", 5, 24, "F"],
    ["Ling Jess", 28, 43, "A"],
    ["Ben Liard", 16, 51, "B"]
  ];
  
  MathScore.splice(2, 1); // it will remove of index-2 row

console.log(MathScore)

// All question of matrix
// 1) Transpose the matrix => leetcode
// 2) Rotate a 2d array => gfg
// 3) Rotate image => leetcode
// 4) print diagonal matrix => gfg and leetcode
// 5) search 2D matrix => leetcode
// 6) count zeros => gfg
// 7) count negative => leetcode
// 8) reverseandinvert the matrix => leetcode
// 9) flipping an image and matrix vertically and horizantally leetcode
// 10) search 2d matrix II => leetcode
// 11) Rotate Image 90 degree => gfg, leetcode
// 12) spiral matrix => leetcode

// sum col wise
// let numberArr = [
//     [10, 20, 60],
//     [8, 10, 52],
//     [15, 5, 24],
//     [26, 28, 43],
//     [12, 16, 51]
// ];

// var sum = 0;
// numberArr.forEach(row => {
//     row.forEach(elememt => {
//         sum += elememt;
//     })
// })

// for(let i = 0; i < numberArr.length; i++){
//     for(let j = 0; j < numberArr.length; j++){
//         if(typeof numberArr[i][j] === 'number')
//         sum += numberArr[i][j];
//     }
// }

// console.log('The sum of column : ', (sum))

// let numberArr = [
//     [10, 20, 60],
//     [8, 10, 52],
//     [15, 5, 24],
//     [26, 28, 43],
//     [12, 16, 51]
// ];

// Initialize an array to store the sum of each row
// let rowSums = new Array(numberArr.length).fill(0);

// Calculate the sum of each row
// for (let i = 0; i < numberArr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < numberArr[i].length; j++) {
//         sum += numberArr[i][j];
//     }
// Store the sum of the current row in the rowSums array
//     rowSums[i] = sum;
// }

// Log the sum of each row
// console.log('Sum of each row:', rowSums);

// let numberArr = [
//     [10, 20, 60],
//     [8, 10, 52],
//     [15, 5, 24],
//     [26, 28, 43],
//     [12, 16, 51]
// ];

//let totalSum = 0; // Initialize a variable to store the total sum of all rows

// Calculate the total sum of all rows
// for (let i = 0; i < numberArr.length; i++) {
//     let rowSum = 0;
//     for (let j = 0; j < numberArr[i].length; j++) {
//         rowSum += numberArr[i][j];
//     }
// Add the sum of the current row to the total sum
//     totalSum += rowSum;
// }

// Log the total sum of row-wise sums
// console.log('Total sum of all rows:', totalSum);





















