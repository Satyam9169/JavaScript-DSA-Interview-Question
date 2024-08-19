let x = 1,
  y = 4;
function HammingDistance(x, y) {
  // XOR the two numbers to get a number that has bits set to 1 where the bits of x and y differ
  let xor = x ^ y;
  // Count the number of set bits (1s) in the XOR result
  let distance = 0;
  while (xor !== 0) {
    // Increment the distance for each set bit
    distance += xor & 1;
    // Right shift to check the next bit
    xor >>= 1;
  }
  return distance;
}

console.log(HammingDistance(x, y));

// for more information visit: https://leetcode.com/problems/hamming-distance/

/*
Here some of the important point to understand the internal working of this program

Binary Number System
Binary numbers use base 2, meaning each digit (bit) can be either 0 or 1. Here's a 
quick summary of how binary numbers work:

0 in binary is 0
1 in binary is 1
2 in binary is 10
3 in binary is 11
4 in binary is 100
5 in binary is 101
And so on...
Bitwise AND Operation
The bitwise AND operation compares each corresponding pair of bits in two binary
numbers and returns a new binary number. The rules are:

1 & 1 = 1
1 & 0 = 0
0 & 1 = 0
0 & 0 = 0
Example: 0101 & 1
Let's break down the operation:

0101 (in binary) is 5 in decimal.
1 (in binary) is 0001 in 4 bits (if we consider it as a 4-bit binary number).
Now, we align the numbers and apply the bitwise AND operation:

sql
Copy code
   0101  (binary for 5)
&  0001  (binary for 1)
---------
   0001  (binary for 1)
Mathematical Format
Let's represent this operation in a mathematical format:

Step 1: Align the binary numbers.

0101
&
0001
0101&0001
Step 2: Apply the bitwise AND rules to each corresponding bit:

   0011  (x = 3)
⊕ 0101  (y = 5)
   -----------------
   0110  (xor result)

Step 3: Combine the results into the final binary number:

0001
 (which is 
1
 in decimal)
0001 (which is 1 in decimal)
Conclusion
The result of 0101 & 1 is 0001 in binary, which is 1 in decimal.

This operation is commonly used in programming to check whether a 
specific bit in a binary number is set (i.e., whether it is 1).

Step-by-Step Breakdown
Binary Representation:

The number 0110 is in binary format. It corresponds to the decimal number 6.
In binary:
Copy code
0 1 1 0
Right Shift Operation (>>):

The right shift operation (>>) shifts all the bits in the binary number to the 
right by a specified number of positions.
In this case, >> 1 means shifting the bits to the right by 1 position.
Applying the Shift:

Shift all bits in 0110 to the right by 1 position. 
The bit on the far right (the least significant bit) will be discarded, 
and a 0 is added to the leftmost position:
yaml
Copy code
0 1 1 0  (Original number: 0110)
↓
0 0 1 1  (After right shift by 1: 0011)
Result:

After the right shift, the binary number 0110 becomes 0011.
The binary number 0011 is equivalent to the decimal number 3.

Mathematical Format
If you were to represent this operation mathematically:

Original number: 0110 (in binary) = 6 (in decimal)
After shifting right by 1 position:
0110 (binary) →(Shift right by 1) 0011 (binary)= 3 (in decimal)
0110(binary) 
Shift right by 1
​
 0011(binary)=3 (in decimal)
Conclusion
The right shift operation 0110 >> 1 results in 0011, which is 3 in decimal.
The right shift effectively divides the original number by 2 and discards any
remainder, making it a quick way to perform integer division by powers of 2.


HERE DRY AND RUN OF THIS CODE

Example
Let's take x = 3 and y = 5 as our example.

Step 1: Convert x and y to Binary
x = 3 in binary is 0011.
y = 5 in binary is 0101.
Step 2: XOR the Two Numbers
The XOR operation will compare each bit of x and y:

   0011  (x = 3)
⊕ 0101  (y = 5)
   ---------
   0110  (xor result)

   The XOR operation results in 0110 (which is 6 in decimal). This result has 1s at the positions where x and y have differing bits.
Step 3: Initialize Distance and Count Set Bits
The function now counts the number of 1s in the XOR result, which represents the Hamming distance.

First Iteration:

xor = 0110 (in binary, which is 6 in decimal).
xor & 1 checks the least significant bit: 0110 & 0001 = 0000 (which is 0).
distance remains 0.
Right shift xor: 0110 >> 1 becomes 0011 (which is 3 in decimal).
Second Iteration:

xor = 0011 (in binary, which is 3 in decimal).
xor & 1: 0011 & 0001 = 0001 (which is 1).
distance increments to 1.
Right shift xor: 0011 >> 1 becomes 0001 (which is 1 in decimal).
Third Iteration:

xor = 0001 (in binary, which is 1 in decimal).
xor & 1: 0001 & 0001 = 0001 (which is 1).
distance increments to 2.
Right shift xor: 0001 >> 1 becomes 0000 (which is 0 in decimal).
Fourth Iteration:

xor = 0000 (in binary, which is 0 in decimal).
The loop exits since xor is now 0.
Step 4: Return the Hamming Distance
Finally, the function returns distance, which is 2 in this case. This means there are 2 positions where the bits of 3 and 5 differ.

Summary
x = 3: 0011
y = 5: 0101
XOR result: 0110 (2 differing bits)
Hamming Distance: 2
This method efficiently calculates the Hamming distance by leveraging bitwise operations.

*/
