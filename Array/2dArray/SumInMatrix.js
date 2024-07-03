// You are given a 0-indexed 2D integer array nums. Initially, your score is 0. Perform the following operations until the matrix becomes empty:

// From each row in the matrix, select the largest number and remove it. In the case of a tie, it does not matter which number is chosen.
// Identify the highest number amongst all those removed in step 1. Add that number to your score.
// Return the final score.

// In this approach
// first will sort the array matrix
// then will extract the max element of each column

const nums = [
    [7, 2, 1],
    [6, 4, 2],
    [6, 5, 3],
    [3, 2, 1]]
const SumInMatrix = (nums) => {
    let n = nums.length;
    let m = nums[0].length;
    let score = 0, max = -Infinity;
    for (let i = 0; i < n; i++) {
        nums[i].sort((a, b) => a - b);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            max = Math.max(max, nums[j][i])
        }
        score += max;
    }
    return score;
}
console.log(SumInMatrix(nums));

// for more information about question
// visit : https://leetcode.com/problems/sum-in-a-matrix/description/
