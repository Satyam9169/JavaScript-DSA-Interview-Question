// let str = "20+90"
// let first = 0;
// let second = 0
// let sign = ''
// let isFirst = false;
// for(let i = 0; i < str.length; i++){
//     if(str.charAt(i) >= '0' && str.charAt(i) <= '9'){
//         if(!isFirst){
//             first = first*10 + (str.charAt(i) - '0');
//         }else{
//             second = second*10 + (str.charAt(i) - '0');
//         }
//     }else{
//         sign = str.charAt(i);
//         isFirst = true;
//     }
// }
// console.log(first)
// console.log(second)
// if(sign === '+'){
//     console.log(first + second);
// }

let str = "20+90";
let result1 = '';
let sign = '';
for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== '+' && str.charAt(i) !== '-' && str.charAt(i) !== '*' && str.charAt(i) !== '/') {
        result1 += str.charAt(i);
    } else {
        sign = str.charAt(i);
        break;
    }
}
console.log(result1);

let result2 = '';
for (let i = str.length - 1; i >= 0; i--) {
    if (str.charAt(i) !== '+' && str.charAt(i) !== '-' && str.charAt(i) !== '*' && str.charAt(i) !== '/') {
        result2 += str.charAt(i);
    } else {
        break;
    }
}
result2 = result2.split('').reverse().join('');
console.log(result2);

let ans = 0;
if (sign === '+') {
    ans = Number(result1) + Number(result2);
    console.log(ans);
} else if (sign === '-') {
    ans = Number(result1) - Number(result2);
    console.log(ans);
} else if (sign === '*') {
    ans = Number(result1) * Number(result2);
    console.log(ans);
} else if (sign === '/') {
    ans = Number(result1) / Number(result2);
    console.log(ans);
}












// function ReverseWord(str) {
//     let word = '', result = '', len = str.length;
//     for (let i = 0; i < len; i++) {
//         let char = str.charAt(i)
//         if (char !== ' ') {
//             word += char;
//         } else if (word.length > 0) {
//             result = " " + word + result;
//             word = "";
//         }
//     }

//     if (word.length > 0) {
//         result = " " + word + result;
//     }

//     return result.trim();
// }