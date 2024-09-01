let arr = [2, 3, 5, 4, 5, 3, 4];  
 

const appearOnce = (arr) => {
    let n = arr.length;
    let res = arr[0];
    for(let i = 1; i < n; i++){
        res = res ^ arr[i];
    }
    return res;
}

console.log(appearOnce(arr))

// A better solution is to use hashing. 

// Traverse all elements and put them in a hash table. Element is used as key and the count of occurrences is used as the value in the hash table. 
// Traverse the array again and print the element with count 1 in the hash table. 
// This solution works in O(n) time but requires extra space.

// The best solution is to use XOR. XOR of all array elements gives us the number with a single occurrence. The idea is based on the following two facts. 

//  XOR of a number with itself is 0. 
// XOR of a number with 0 is number itself.

// Let us consider the above example.  
// Let ^ be xor operator as in C and C++.

// res = 7 ^ 3 ^ 5 ^ 4 ^ 5 ^ 3 ^ 4

// Since XOR is associative and commutative, above 
// expression can be written as:
// res = 7 ^ (3 ^ 3) ^ (4 ^ 4) ^ (5 ^ 5)  
//     = 7 ^ 0 ^ 0 ^ 0
//     = 7 ^ 0
//     = 7 