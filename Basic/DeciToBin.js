const readline = require('readline');

const rl = readline.createInterface({
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