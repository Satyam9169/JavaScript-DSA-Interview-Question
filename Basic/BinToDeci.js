const convert = (num) => {

    let rem, decimal = 0, mul = 1;
    while (num != 0) {
        rem = num % 10;
        num = Math.floor(num / 10);
        decimal += rem * Math.pow(2, mul);
        mul *= 2;
        // ++mul;
    }
    return decimal;
}

console.log(convert(11));