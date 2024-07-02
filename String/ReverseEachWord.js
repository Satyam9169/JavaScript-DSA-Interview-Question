function ReverseEachWord(str) {
    let word = str.split(' ');
    function reverse(arr) {
        let str = arr.split('');
        let start = 0, end = str.length - 1;
        while (start <= end) {
            let temp = str[start];
            str[start] = str[end];
            str[end] = temp;
            start++;
            end--;
        }
        return str.join('');
    }
    for (let i = 0; i < word.length; i++) {
        word[i] = reverse(word[i]);
    }

    return word.join(' ');
}

console.log(ReverseEachWord('Hello World!'))