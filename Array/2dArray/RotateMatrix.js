let matrix = [[1,2,3],[4,5,6],[7,8,9]];

const RotateMatrix = (matrix) => {
    let n = matrix.length;
    let m = matrix[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < m; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < Math.floor(m / 2); j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][m - 1 - j];
            matrix[i][m - 1 - j] = temp;
        }
    }
    return matrix;
}

console.log(RotateMatrix(matrix));