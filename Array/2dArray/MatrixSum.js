// First approach
let mat = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
// [[1, 1, 1, 1],
// [1, 1, 1, 1],
// [1, 1, 1, 1],
// [1, 1, 1, 1]]

function MatrixSum(mat) {
    // This is second more optimsed approach
    let n = mat.length;
    let m = mat[0].length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += mat[i][i];
        if (i != n - 1 - i) {
            sum += mat[i][n - 1 - i];
        }
    }

    return sum;

    // This is my first approach
    let n = mat.length;
    let m = mat[0].length;
    let sum1 = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j <= i; j++) {
            if (i === j) {
                sum1 += mat[i][j];
            }
        }
    }
    let sum2 = 0, j = n - 1, i = 0;
    while (i < n && j >= 0) {
        if (i !== j) {
            sum2 += mat[i][j];
        }
        i = i + 1;
        j = j - 1;
    }
    return sum1 + sum2;
}

console.log(MatrixSum(mat));

// For more information
// https://leetcode.com/problems/matrix-diagonal-sum/description/
