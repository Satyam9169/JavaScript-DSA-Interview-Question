function ReverseWord(str) {
    let word = str.split(' ');

    function reverse(str) {
        let start = 0, end = str.length - 1;
        while (start <= end) {
            let temp = str[start];
            str[start] = str[end];
            str[end] = temp;
            start++, end--;
        }
        return str;
    }

    let reverseString = reverse(word);
    return reverseString.join(' ');
}

console.log(ReverseWord('satyam agrahari'));
console.log(ReverseWord('Hello world!'));
console.log(ReverseWord('The quick brown fox'));
console.log(ReverseWord('a b c d e'));
console.log(ReverseWord('singleWord'));
console.log(ReverseWord(''));