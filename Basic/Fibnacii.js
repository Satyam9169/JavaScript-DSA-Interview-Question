const fibonaci = (num) => {
    let first = 0;
    let second = 1;
    let sum;
    for(let i = 0; i < num; i++){
         sum = first + second;
         first = second;
         second = sum;
    }

    return sum;
}
console.log('fibonaci series of nth : ', fibonaci(4));