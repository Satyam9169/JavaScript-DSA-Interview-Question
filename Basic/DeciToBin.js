/*
TC => O(log n)
SC => O(1)
*/
import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a decimal number : ', (num) => {
    let n = num, rem, bin = 0, mul = 1;
    while (n > 0) {
        rem = n % 2;
        n = Math.floor(n / 2);
        bin = bin + mul * rem;
        mul = mul * 10;
    }

    console.log(`The binary number of this ${num} : is ${bin}`)
    rl.close()
})

/*

Initial Setup:

num is initialized to 16.
Variables initialized: n = 16, rem = 0, bin = 0, mul = 1.
While Loop Iteration 1:

Condition (n > 0) is true (16 > 0).
Calculate rem = n % 2 (rem = 16 % 2 = 0).
Update bin = mul * rem + bin (bin = 1 * 0 + 0 = 0).
Update n = Math.floor(n / 2) (n = Math.floor(16 / 2) = 8).
Update mul = mul * 10 (mul = 1 * 10 = 10).
Current State: n = 8, bin = 0, mul = 10.

While Loop Iteration 2:

Condition (n > 0) is true (8 > 0).
Calculate rem = n % 2 (rem = 8 % 2 = 0).
Update bin = mul * rem + bin (bin = 10 * 0 + 0 = 0).
Update n = Math.floor(n / 2) (n = Math.floor(8 / 2) = 4).
Update mul = mul * 10 (mul = 10 * 10 = 100).
Current State: n = 4, bin = 0, mul = 100.

While Loop Iteration 3:

Condition (n > 0) is true (4 > 0).
Calculate rem = n % 2 (rem = 4 % 2 = 0).
Update bin = mul * rem + bin (bin = 100 * 0 + 0 = 0).
Update n = Math.floor(n / 2) (n = Math.floor(4 / 2) = 2).
Update mul = mul * 10 (mul = 100 * 10 = 1000).
Current State: n = 2, bin = 0, mul = 1000.

While Loop Iteration 4:

Condition (n > 0) is true (2 > 0).
Calculate rem = n % 2 (rem = 2 % 2 = 0).
Update bin = mul * rem + bin (bin = 1000 * 0 + 0 = 0).
Update n = Math.floor(n / 2) (n = Math.floor(2 / 2) = 1).
Update mul = mul * 10 (mul = 1000 * 10 = 10000).
Current State: n = 1, bin = 0, mul = 10000.

While Loop Iteration 5:

Condition (n > 0) is true (1 > 0).
Calculate rem = n % 2 (rem = 1 % 2 = 1).
Update bin = mul * rem + bin (bin = 10000 * 1 + 0 = 10000).
Update n = Math.floor(n / 2) (n = Math.floor(1 / 2) = 0).
Update mul = mul * 10 (mul = 10000 * 10 = 100000).
Current State: n = 0, bin = 10000, mul = 100000.

End of While Loop:

Exit loop since n is now 0.
Return Result:

The function returns bin, which is 10000.
Therefore, DeciToBin(16) returns 10000, which is the binary representation of 16.

*/