let matrix = [[1,1,0],[1,0,1],[0,0,0]];

const flipAndInvert = (matrix) => {
    let n = matrix.length;
    let m = matrix[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.floor(m / 2); j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][m - 1 - j];
            matrix[i][m - 1 - j] = temp;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            matrix[i][j] = matrix[i][j] === 0 ? 1 : 0;
        }
    }
    return matrix
}

console.log(flipAndInvert(matrix));