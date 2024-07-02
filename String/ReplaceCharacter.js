const ReplaceCharacter = (inputString, c1, c2) => {

    let resultString = '';
    for(let i = 0; i < inputString.length; i++){
        if(inputString[i] !== c1){
            resultString += inputString[i];
        }else{
            resultString += c2;
        }
    }
    return resultString;
}

console.log(ReplaceCharacter('abacd', 'a', 'x'))

// const ReplaceCharacter = (str, c1, c2) => {
//     let inputString = str.split('');

//     for(let i = 0; i < inputString.length; i++){
//         if (inputString[i] === c1) {
//             inputString[i] = c2;
//         }
//     }
//     let resultString = inputString.join('')
//     return resultString;
// }

// let str = 'abacd';
// let c1 = 'a', c2 = 'x';
// console.log(ReplaceCharacter(str, c1, c2));