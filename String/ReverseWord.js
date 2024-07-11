// Time complexity => O(n), Space Complexity => O(n);
function ReverseWord(str) {
    let len = str.length, result = '', word = '', words = [];

    for (let i = 0; i < len; i++) {
        let char = str.charAt(i);
        if (char !== " ") {
            word += char;
        } else if (word.length > 0) {
            words.push(word);
            word = "";
        }
    }

    if (word.length > 0) { // this is for last word
        words.push(word);
    }

    for (let i = words.length - 1; i >= 0; i--) { // here we are giving the space with string
        if (result.length > 0) {
            result += " ";
        }
        result += words[i];
    }
    return result;
}

console.log(ReverseWord('satyam agrahari'));
console.log(ReverseWord('  Hello World  '));
console.log(ReverseWord('the sky is blue'));
console.log(ReverseWord('a good   example'));

// THIS IS FIRST APPROACH
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


