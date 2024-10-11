const print = (i) => {
  if (i > 10) {
    return;
  }
  console.log(i);
  print(i + 1);
};
let i = 0;
print(i);

// In the print function, the reason the values are printed from 10 to 1 is because of
// the recursive call order and the fact that the console.log(i) statement is placed after the recursive call.

// Here’s what happens step by step:

// The function print(i) is first called with i = 0.
// Before printing i, the function calls itself recursively with i + 1 (i.e., print(i + 1)).
// This continues until i reaches 11, where the function hits the base condition if(i > 10), and the recursion stops.
// At this point, the function starts to return from each recursive call, unwinding the call stack.
// Once the function returns from the deepest call (i = 11), it then executes the console.log(i) statement for each level as it returns.
// Since console.log(i) happens after the recursive call, it starts printing i values in reverse order (i.e., from 10 down to 1).
// If you want to print i in increasing order (from 0 to 10), you can move the console.log(i) statement before the recursive call:

// javascript
// Copy code
// const print = (i) => {
//     if(i > 10){
//         return;
//     }
//     console.log(i);  // Print before the recursion
//     print(i + 1);
// }

// let i = 0;
// print(i);
// In this case, the output will be from 0 to 10.
