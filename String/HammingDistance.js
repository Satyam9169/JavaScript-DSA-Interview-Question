let x = 1, y = 4;
function HammingDistance(x, y){
    // XOR the two numbers to get a number that has bits set to 1 where the bits of x and y differ
    let xor = x ^ y;
    // Count the number of set bits (1s) in the XOR result
    let distance = 0;
    while (xor !== 0) {
        // Increment the distance for each set bit
        distance += xor & 1;
        // Right shift to check the next bit
        xor >>= 1
    }
    return distance;
}

console.log(HammingDistance(x, y));

// for more information visit: https://leetcode.com/problems/hamming-distance/