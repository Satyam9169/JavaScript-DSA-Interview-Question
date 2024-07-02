let matrix = [
    [1, 2, 3, 10],
    [4, 5, 6, 11],
    [7, 8, 9, 12],
    [13, 14, 15, 16]
    // [1, 2, 3],
    // [4, 5, 6],
    // [7, 8, 9]
];

// Flipping the matrix vertically using two nested for loops
let rows = matrix.length;
let cols = matrix[0].length;

for (let i = 0; i < Math.floor(rows / 2); i++) {
    for (let j = 0; j < cols; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[rows - 1 - i][j];
        matrix[rows - 1 - i][j] = temp;
    }
}

// Print the flipped matrix row-wise with commas
for (let i = 0; i < rows; i++) {
    console.log(matrix[i].join(', '));
}


