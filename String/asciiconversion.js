const letterPrinting = (str) => {
    let count = new Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
        let index = str.charCodeAt(i) - 97;
        count[index]++;
    }
    for (let i = 0; i < 26; i++) {
        if (count[i] > 0) {
            let letter = String.fromCharCode(i + 97);
            console.log(letter + ": " + count[i])
        }
    }
}
letterPrinting("abclgj")

// const StringToNumber = (str) => {
//     let num = 0;
//     let isNegative = false;
//     let startIndex = 0;

//     if (str[0] === "-") {
//         isNegative = true;
//         startIndex = 1;
//     }

//     for (i = startIndex; i < str.length; i++) {
//         let char = str.charAt(i);
//         if (char < '0' || char > '9') return NaN;

//         num = num * 10 + (char - '0')
//     }
//     return isNegative ? -num : num;
// }

// console.log(StringToNumber("10256"))
// console.log(StringToNumber("-17896"))