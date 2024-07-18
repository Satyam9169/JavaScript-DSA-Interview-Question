const Palindrom = (num) => {
    let n = num, rev = 0;
    while (num > 0) {
        let mod = num % 10;
        rev = (rev * 10) + mod;
        num = parseInt(num / 10);
    }

    if (rev == n) {
        return true;
    } else {
        return false;
    }
}

console.log(Palindrom(12321));