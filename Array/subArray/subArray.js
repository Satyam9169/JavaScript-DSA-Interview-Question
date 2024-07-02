// const arr = [-1, 3, 7, 2];
/*
subarray in array
-1
-1, 4
-1, 4, 7
-1, 4, 7, 2
4
4, 7
4, 7, 2
7,
7, 2
2
*/
// function subArray(arr) {
//     let len = arr.length, sumMax = -Infinity;
//     for (let i = 0; i < len; i++) {
//         for (let j = i; j < len; j++) {
//             let subArr = [];
//             for (let k = i; k <= j; k++) {
//                 subArr.push(arr[k]);
//             }
//             console.log(subArr.join(", "))
//         }
//     }
// }

// subArray(arr)


// Maximum subarray sum

// using brute force approach
// function maximumSubArray(num){
//     let maxSum = -Infinity;
//     for(let i = 0; i < num.length; i++){
//         for(let j = i; j < num.length; j++){
//             let sum = 0
//             for(let k = i; k <= j; k++){
//                 sum += num[k];
//             }
//             maxSum = Math.max(maxSum, sum); // this way still we can do it
//  if(sum > maxSum){
//      maxSum = sum;
//  }
//         }
//     }
//     return maxSum;
// }
let num = [4, -4, 6, -6, 10, -11, 12]
console.log(maximumSubArray(num));

function maximumSubArray(arr) {
    let maxSum = -Infinity, sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        maxSum = Math.max(maxSum, sum);
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
}