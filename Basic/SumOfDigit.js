let num = 12345
 let n = num;
 let sum = 0;

while(n > 0) {
    let mod = n % 10;
    sum = sum + (mod);
    n = Math.floor(n / 10);
}

console.log(sum);