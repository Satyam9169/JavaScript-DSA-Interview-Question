// binary to decimal
function BintoDeci(num){
    let n = num;
    let rem = 0, deci = 0, mul = 1;
    while(n > 0){
        rem = n % 10;
        deci = deci + rem * mul;
        n = Math.floor(n / 10);
        mul = mul * 2;
    }
    return deci;
}
console.log(BintoDeci(10000))
console.log(BintoDeci(1010))
console.log(BintoDeci(1111))
console.log(BintoDeci(10010))