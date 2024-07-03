// Count Negative Numbers in a Sorted Matrix
/**
 * @param {number[][]} grid
 * @return {number}
 */

let grid = [
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3]
]

const CountNegative = (grid) => {
    // This is more optimised approach
    let n = grid.length;
    let m = grid[0].length;
    let count = 0;
    let row = 0;
    let col = n - 1;
    while (row < n && col >= 0) {
        if (grid[row][col] < 0) {
            count += n - row;
            col = col - 1;
        } else {
            row = row + 1;
        }
    }
    return count;
    // This is my first approach
    // let count = 0;
    // for (let i = 0; i < grid.length; i++) {
    //     for (let j = 0; j < grid[i].length; j++) {
    //         if (grid[i][j] < 0) count++;
    //     }
    // }
    // return count;
}

console.log(CountNegative(grid))