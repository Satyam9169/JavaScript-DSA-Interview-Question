function fact(n) {
    if (n === 0) return 1;
    return n * fact(n - 1);
}

console.log(fact(6))
console.log(fact(5))
console.log(fact(4))
console.log(fact(3))
console.log(fact(2))
console.log(fact(1))
