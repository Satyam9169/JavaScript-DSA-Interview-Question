/**
 * @param {string} s
 * @return {string}
 */
let s = 'Lovely Professional University'
//output : ylevoL lanoisseforP ytisrevinU
function ReverseEachWord(s) {
    // This is second approach TC => O(n), SC => O(n);
    let word = '', result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result += reverse(word) + ' ';
            word = '';
        } else {
            word += s[i];
        }
    }
    result += reverse(word);
    return result;

    function reverse(str) {
        let reversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }
    // THIS IS SECOND APPROACH 
    // This is first approach
    // let word = s.split(' ');
    // function reverse(arr) {
    //     let str = arr.split('');
    //     let start = 0, end = str.length - 1;
    //     while (start <= end) {
    //         let temp = str[start];
    //         str[start] = str[end];
    //         str[end] = temp;
    //         start = start + 1;
    //         end = end - 1;
    //     }
    //     return str.join('');
    // }
    // for (let i = 0; i < word.length; i++) {
    //     word[i] = reverse(word[i]);
    // }
    // return word.join(' ');
};
console.log(ReverseEachWord(s))
/*

This dry run is for second approach
Initial State
word = ''
result = ''
Iteration Steps
First word: "Let's"

i = 0: s[i] = 'L' → word = 'L'
i = 1: s[i] = 'e' → word = 'Le'
i = 2: s[i] = 't' → word = 'Let'
i = 3: s[i] = ''' → word = 'Let'
i = 4: s[i] = 's' → word = 'Let's'
i = 5: s[i] = ' '
Call reverse(word) with word = "Let's"
reverse returns "s'teL"
result = "s'teL "
Reset word = ''
Second word: "take"

i = 6: s[i] = 't' → word = 't'
i = 7: s[i] = 'a' → word = 'ta'
i = 8: s[i] = 'k' → word = 'tak'
i = 9: s[i] = 'e' → word = 'take'
i = 10: s[i] = ' '
Call reverse(word) with word = 'take'
reverse returns 'ekat'
result = "s'teL ekat "
Reset word = ''
Third word: "LeetCode"

i = 11: s[i] = 'L' → word = 'L'
i = 12: s[i] = 'e' → word = 'Le'
i = 13: s[i] = 'e' → word = 'Lee'
i = 14: s[i] = 't' → word = 'Leet'
i = 15: s[i] = 'C' → word = 'LeetC'
i = 16: s[i] = 'o' → word = 'LeetCo'
i = 17: s[i] = 'd' → word = 'LeetCod'
i = 18: s[i] = 'e' → word = 'LeetCode'
i = 19: s[i] = ' '
Call reverse(word) with word = 'LeetCode'
reverse returns 'edoCteeL'
result = "s'teL ekat edoCteeL "
Reset word = ''
Fourth word: "contest"

i = 20: s[i] = 'c' → word = 'c'
i = 21: s[i] = 'o' → word = 'co'
i = 22: s[i] = 'n' → word = 'con'
i = 23: s[i] = 't' → word = 'cont'
i = 24: s[i] = 'e' → word = 'conte'
i = 25: s[i] = 's' → word = 'contes'
i = 26: s[i] = 't' → word = 'contest'
End of the loop
Call reverse(word) with word = 'contest'
reverse returns 'tsetnoc'
result = "s'teL ekat edoCteeL tsetnoc"
*/
