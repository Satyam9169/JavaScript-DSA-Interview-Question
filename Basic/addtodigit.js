const sumOfdigit = (num) => {
  if (num > 9) {
    let sum = 0,
      rem;
    if (num !== 0) {
      rem = num % 10;
      num = Math.floor(num / 10);
      sum = sum + rem;
    }
    num = sum;
  }
  return num;
};

let number = 123;
console.log(sumOfdigit(number));

/*
dry and run
Initial State:

num = 38
First Outer While Loop Iteration:

Since num is greater than 9, we enter the loop.
Initialize ans = 0 and rem.
First Inner While Loop Iteration:

rem = num % 10 = 38 % 10 = 8
ans = ans + rem = 0 + 8 = 8
num = Math.floor(num / 10) = Math.floor(38 / 10) = 3
Second Inner While Loop Iteration:

rem = num % 10 = 3 % 10 = 3

ans = ans + rem = 8 + 3 = 11

num = Math.floor(num / 10) = Math.floor(3 / 10) = 0

The inner while loop ends since num is now 0.

Update num to ans:

num = ans = 11
Second Outer While Loop Iteration:

Since num (which is 11) is greater than 9, we enter the loop.
Initialize ans = 0 and rem.
First Inner While Loop Iteration:

rem = num % 10 = 11 % 10 = 1
ans = ans + rem = 0 + 1 = 1
num = Math.floor(num / 10) = Math.floor(11 / 10) = 1
Second Inner While Loop Iteration:

rem = num % 10 = 1 % 10 = 1

ans = ans + rem = 1 + 1 = 2

num = Math.floor(num / 10) = Math.floor(1 / 10) = 0

The inner while loop ends since num is now 0.

Update num to ans:

num = ans = 2
Final State:

Since num (which is 2) is not greater than 9, the outer while loop ends.
The function returns num, which is 2.
So, the dry run shows that the addDigits function correctly computes the repeated
sum of digits until a single digit is obtained. For the input 38, the function returns 2.
*/

// function sumOfdigit(num) {
//     let sum = 0;
//     while(num > 0){
//         sum += num % 10;
//         num = Math.floor(num / 10)
//     }
//     return sum;
// }

// function main() {
//     const arr = [1,2,3,4,5]
//     let sum = 0;
//     for(let num of arr){
//         sum += num;
//     }
//     const sumOfdigit1 = sumOfdigit(sum)
//     console.log('Add to digit : ' + sumOfdigit1);
// }

// // console.log(sumOfdigit(12345));
// main()
