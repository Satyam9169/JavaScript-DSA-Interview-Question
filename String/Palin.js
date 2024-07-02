const palin = (str) => {
    str.replace(/[^a-z0-9]/g, '').toLowerCase();
    let start = 0, end = str.length - 1;
    while (start <= end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

// const palin = (str) => {
//     let start = 0;
//     let len = str.length - 1;
//     let end = len;
//     let str1 = str.split('');

//     while (start <= end) {
//         let temp = str1[start];
//         str1[start] = str1[end];
//         str1[end] = temp;
//         start++;
//         end--;
//     }

//     let reversed = str1.join('');
//     if (str == reversed) {
//         return true;
//     } else {
//         return false;
//     }
// }

console.log(palin('abccba'));