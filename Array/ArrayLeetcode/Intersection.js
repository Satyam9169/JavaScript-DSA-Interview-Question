// let nums1 = [1, 2, 2, 1], nums2 = [2, 2];
let nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];
const Intersection = (nums1, nums2) => {
    const newArray = [];
    let map = new Map()
    //here we are counting the frequency an array
    for (let num of nums1) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

   // compare if it is existing push in newArray
    for (let num of nums2) {
        if (map.has(num) && map.get(num) > 0) {
            newArray.push(num);
            map.set(num, map.get(num) - 1);
        }
    }
    return newArray;

    // This is second approach
    // nums1.sort((a, b) => a - b);
    // nums2.sort((a, b) => a - b);
    // let i = 0, j = 0, newArray = [];
    // while (i < nums1.length && j < nums2.length) {
    //     if (nums1[i] === nums2[j]) {
    //         newArray.push(nums1[i]);
    //         i = i + 1;
    //         j = j + 1;
    //     } else if (nums1[i] < nums2[j]) {
    //         i++;
    //     } else {
    //         j++;
    //     }
    // }
    // return newArray;
}

console.log(Intersection(nums1, nums2))