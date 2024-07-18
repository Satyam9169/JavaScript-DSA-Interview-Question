const Reverse = (num) => {

    var n = num;
    var rev = 0;
    while (n != 0) {
        var mod = n % 10;
        rev = (rev * 10) + mod;
        n = parseInt(n / 10);
    }
    return rev;
}

console.log(Reverse(12345))