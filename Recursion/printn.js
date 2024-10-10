const print = (i) => {
    if(i > 10){
    return;
    }
    print(i + 1)
    console.log(i);
}
let i = 0;
print(i)

// output
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

// why it is printing in reverse order 
// When the function print(i) is first called with i = 0, it checks the condition if(i > 10). 
// Since i = 0, it proceeds to the next step.
// It prints 0 using console.log(i).
// After printing, the function calls itself recursively with i + 1 (so print(i + 1) is called with i = 1).
// This process continues, printing each value of i (1, 2, 3, ...) before making the next recursive call.
// When i = 10, it prints 10 and calls print(i + 1) with i = 11.
// When i = 11, the condition if(i > 10) is true, so the function stops, and no further calls are made.
// Since the console.log(i) is executed before the recursive call, the values are printed in order from 0 to 10, one by one.

// Here is the output:

// Copy code
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// If you'd like a visual diagram, just let me know!






// You said:
// in previous code why it was printing reverse order 
// and help me to understand how function is calling in the stack
// explain me step by step
// ChatGPT said:
// ChatGPT
// In the previous code where the console.log(i) was placed after the recursive call (print(i + 1)), the function printed values in reverse order because of the way recursion and the call stack work.

// Let's review the code where the values were printed in reverse order:

// javascript
// Copy code
// const print = (i) => {
//     if(i > 10){
//         return;
//     }
//     print(i + 1);  // Recursive call
//     console.log(i); // Print after recursion
// }
// let i = 0;
// print(i);
// Here’s a step-by-step breakdown of how this works:

// Step-by-Step Execution (Stack Behavior):
// First Call (i = 0):

// The function print(0) is called.
// It checks if(i > 10); this is false, so it proceeds.
// The recursive call print(i + 1) or print(1) is made.
// The function pauses (doesn’t hit console.log(i) yet) and waits for the inner call to complete.
// Second Call (i = 1):

// The function print(1) is now called.
// Again, if(i > 10) is false, so it proceeds.
// The recursive call print(i + 1) or print(2) is made.
// Still no printing yet, the function waits for the inner call to complete.
// This process continues with calls being made for print(2), print(3), all the way up to print(10).

// Deepest Call (i = 11):

// When print(11) is called, if(i > 10) is true, so the function immediately returns without doing anything.
// This is the base case that stops further recursion.
// Unwinding the Stack (Printing in Reverse):

// Now, the function begins to return from each recursive call.
// It returns to the previous call, print(10), and after the return, it hits console.log(10), so it prints 10.
// Then, it returns to print(9), and after returning, it prints 9.
// This continues, unwinding the stack, printing 8, 7, 6, and so on, until it finally prints 0 when the initial call print(0) completes.
// How the Stack Looks at Each Step:
// Before the first return (at the deepest level), the stack looks like this:

// scss
// Copy code
// print(0)
// print(1)
// print(2)
// ...
// print(10)
// print(11) -> returns (base case hit)
// At this point, nothing has been printed yet, as all recursive calls are waiting for the deeper ones to return.

// As the stack unwinds, each recursive call completes, and the console.log(i) is executed:

// scss
// Copy code
// print(10) -> prints 10, then returns
// print(9)  -> prints 9, then returns
// print(8)  -> prints 8, then returns
// ...
// print(1)  -> prints 1, then returns
// print(0)  -> prints 0, then returns
// Final Output (in reverse):

// Copy code
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Key Concept: Stack Frames and Recursion
// Each function call creates a stack frame in memory, which holds the local variables (in this case, i) and the position in the code. The program keeps adding new frames to the stack as it makes recursive calls. Once the base condition is met, it begins to pop frames off the stack, executing the remaining code (in this case, the console.log(i)), leading to the reverse-order printing.
