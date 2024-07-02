const reverseString = (str) => {

    let start = 0;
    let len = str.length - 1;
    let end = len;
    let str1 = str.split('');

    while (start <= end) {
        let temp = str1[start];
        str1[start] = str1[end];
        str1[end] = temp;
        start++;
        end--;
    }
    return str1.join('');
}

console.log(reverseString('satyam'));

// const reverseString = (str) => {
//     let result = "";
//     for(let i = str.length - 1; i>=0; i--){
//         result += str[i]
//     }
//     return result;
// }

