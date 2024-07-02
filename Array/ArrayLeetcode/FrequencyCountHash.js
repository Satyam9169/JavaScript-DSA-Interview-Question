let arr = [1, 2, 3, 2, 2, 1, 6, 5, 2, 1];
let mp = new Map();
for (var i = 0; i < arr.length; i++) { // Traverse over an array
    if (mp.has(arr[i])) {
        mp.set(arr[i], mp.get(arr[i]) + 1);
    } else {
        mp.set(arr[i], 1);
    }
}
mp.forEach((k, v) => {
    console.log(v + " : " + k);
})

// O(n) Time complexity 