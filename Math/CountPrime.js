/*
204. Count Primes
Given an integer n, return the number of prime numbers that are strictly less than n.

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0
 

Constraints:

0 <= n <= 5 * 106
*/
const CountPrime = (n) => {
    if (n <= 2) return 0;
    const isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) count = count + 1;
    }
    return count;

     // This was my first approach got TLE PASSED test cases => 45 / 66
    // if (n <= 2) return 0;
    // const isPrime = (n) => {
    //     for (let i = 2; i <= Math.sqrt(n); i++) {
    //         if (n % i === 0) return false;
    //     }
    //     return true;
    // }
    // let count = 0;
    // for (let i = 2; i < n; i++) {
    //     if (isPrime(i)) count = count + 1;
    // }
    // return count;
}

console.log(CountPrime(4339338))