// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"]

// function removeDublicate() {
//     return arr.filter((item, index)=> arr.indexOf(item) === index)
// }

// console.log(removeDublicate());

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let newArr = [];
const map = new Map();
for(let i = 0; i < arr.length; i++){
    if(map.has(arr[i])){
        continue;
    }else{
        map.set(arr[i], 1);
        newArr.push(arr[i]);
    }
}
console.log("without Duplicate : " + newArr);

// const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// const removeDublicate = (arr) => {
//     let i = 1;
//     for (let j = 1; j < arr.length; j++) { // we have treversed the array
//         if (arr[j] !== arr[i - 1]) {
//             arr[i] = arr[j];
//             i++;
//         }
//     }
    //     Here's a breakdown of what happens:

    // Initially, both i and j are set to 0.
    // The algorithm compares arr[j] with arr[i]. If they are not equal, it means a new unique element is found.
    //  In that case, arr[i + 1] is updated with the new unique element (arr[j]), and i is incremented.
    // If arr[j] is equal to arr[i], it means the element is a duplicate, so j is just incremented.
    // After the loop completes:

    // i represents the last index where a unique element was found. i also calculte the value for unique element
    // j has traversed the entire array.

//     let result = [];
//     for (let k = 0; k < i; k++) {
//         result[k] = arr[k];
//     }
//     return result;
// }

// console.log(removeDublicate(arr))

























