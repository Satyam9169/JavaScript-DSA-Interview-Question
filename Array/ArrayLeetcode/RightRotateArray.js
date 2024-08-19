function RightRotateArray(a, r) {
    const n = a.length;
    r = r % n;
    const rotatedArray = new Array(n);
    for (let i = 0; i < n; i++) {
        let newIndex = (i + r) % n;
        rotatedArray[newIndex] = a[i];
    }
    return rotatedArray;
}
const a = [1, 2, 3, 4, 5];
// output : [ 4, 5, 1, 2, 3 ]
const r = 2;
console.log(RightRotateArray(a, r))