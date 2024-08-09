// Today's agedas is sort the frequencies of key
let arr = [2, 3, 4, 5, 2, 2, 0, 2, 5, 5, 5];
// output: [ [ 0, 1 ], [ 2, 4 ], [ 3, 1 ], [ 4, 1 ], [ 5, 4 ] ]
/*
First find the count the freq
*/

const countFreq = (arr) => {
    let map = new Map();
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1); // as of now we have count the freq of an array in key
        // value pair
    }
    // now have to sort the frequency of key's
    const sortFreq = Array.from(map).sort((a, b) => a[0] - b[0]);
    return sortFreq;
}

console.log(countFreq(arr))

/*
Time Complexity: O(n + k log k)
Space Complexity: O(k)
*/