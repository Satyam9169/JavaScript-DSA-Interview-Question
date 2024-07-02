let arr1 = [[1, 2], [3, 4], [5, 6], [8, [9, 10, [11, [12, [13, 14]]]]]];
// let result = arr.flat(Infinity)
// console.log(result);

function flattenArrayOptimal(arr) {
    let newArray = []
    function flattern(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flattern(arr[i]) // recursion call in for nested array
            } else {
                newArray.push(arr[i]) // push non-array elements to the flattern array
            }
        }
    }
    flattern(arr); // start the calling function
    return newArray;
}

const result = flattenArrayOptimal(arr1)
console.log(result);