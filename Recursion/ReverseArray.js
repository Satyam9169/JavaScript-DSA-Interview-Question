const f = (i, arr, n) => {
    if (i >= arr.length / 2) return;   // base condition => when base condition is met then stop executing
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]]; // reverse the array
    f(i + 1, arr, n); // recursive call
}

let arr = [1, 2, 3, 4, 5];
f(0, arr, 5);
console.log(arr)