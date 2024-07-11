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

/*
Dry Run:
Input: " hello world "
Initial Setup:
s = " hello world "
len = 15
result = ""
word = ""
words = []
Collect Words from Left to Right:
Iteration 1 to 2 (i = 0 to 1):

s.charAt(0) and s.charAt(1) are spaces.
word remains "".
words remains [].
Iteration 3 to 7 (i = 2 to 6):

s.charAt(2) to s.charAt(6) are "h", "e", "l", "l", "o".
word is constructed as "hello".
Iteration 8 (i = 7):

s.charAt(7) is a space.
word is "hello", so it gets added to words.
words = ["hello"].
word is reset to "".
Iteration 9 to 13 (i = 8 to 12):

s.charAt(8) to s.charAt(12) are "w", "o", "r", "l", "d".
word is constructed as "world".
Iteration 14 to 15 (i = 13 to 14):

s.charAt(13) and s.charAt(14) are spaces.
word is "world", so it gets added to words.
words = ["hello", "world"].
word is reset to "".
After Loop:

word is checked, and since it's empty, nothing is added to words.
Construct the Result by Reversing the Collected Words:
Iteration 1 (i = 1):

result is "".
words[1] is "world".
result = "world".
Iteration 2 (i = 0):

result is "world".
words[0] is "hello".
result = "world hello".
Output:
The function returns "world hello".
Conclusion:
The dry run shows that the code correctly reverses the words and handles
leading/trailing/multiple spaces efficiently. The final output matches the expected result.
*/

// THIS IS FIRST APPROACH
/*
function ReverseWord(str) {
    let word = '', result = '', len = str.length;
    for (let i = 0; i < len; i++) {
        let char = str.charAt(i)
        if (char !== ' ') {
            word += char;
        } else if (word.length > 0) {
            result = " " + word + result;
            word = "";
        }
    }

    if (word.length > 0) {
        result = " " + word + result;
    }

    return result.trim();
}
*/

/*
Dry Run:
Initial Setup:
s = " hello world "
word = ""
len = 15
result = ""
Iteration 1 to 2 (i = 0 to 1):
s.charAt(0) and s.charAt(1) are spaces.
word remains "".
result remains "".
Iteration 3 to 7 (i = 2 to 6):
s.charAt(2) to s.charAt(6) are "h", "e", "l", "l", "o".
word is constructed as "hello".
Iteration 8 (i = 7):
s.charAt(7) is a space.
word is "hello", so it gets added to result.
result = " hello".
word is reset to "".
Iteration 9 to 13 (i = 8 to 12):
s.charAt(8) to s.charAt(12) are "w", "o", "r", "l", "d".
word is constructed as "world".
Iteration 14 (i = 13):
s.charAt(13) is a space.
word is "world", so it gets added to result.
result = " world hello".
word is reset to "".
Iteration 15 (i = 14):
s.charAt(14) is a space.
word remains "".
After Loop:
word is checked, and since it's empty, nothing is added to result.
Final Step:
result is " world hello".
result.trim() is called to remove leading spaces.
Final result = "world hello".
Output:
The function returns "world hello".
Conclusion:
The dry run shows that the code correctly reverses the words and handles leading/trailing/multiple spaces efficiently. The final output matches the expected result.
*/

