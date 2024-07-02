// let arr = [1, 2, 3, 2, 2, 1, 6, 5, 2, 1];
// let num = [];  // To Store the arr element
// let count = []; // To store the count of Element
// for (var i = 0; i < arr.length; i++) { // Traverse over an array
//     let isPresent = false;  // Maintain variable to check if value is alredy present
//     for (let j = 0; j < num.length; j++) {    // find current element in the newly created array.
//         if (arr[i] === num[j]) {      // Value found in Array
//             count[j]++;
//             isPresent = true;
//         }
//     }
//     if (!isPresent) {     // Not present in array more than 1 
//         num.push(arr[i]);
//         count.push(1);
//     }
// }

// for (let j = 0; j < num.length; j++) {
//     console.log(num[j] + " : " + count[j]);
// }


// This is second approach
let arr = [1, 2, 3, 2, 2, 1, 6, 5, 2, 1];

function countFrequency(arr) {
    let frequencies = {};

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (frequencies[element]) {
            // Check if element exists in frequencies object
            frequencies[element]++;
        } else {
            frequencies[element] = 1;
            // Initialize count to 1 for new element
        }
    }
    return frequencies;
}

console.log(countFrequency(arr))