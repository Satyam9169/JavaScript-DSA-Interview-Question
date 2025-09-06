//1st way
// let n = 29;

// if (n < 2) {
//     console.log('not a prime, please enter greaten than 2');
// } else {
//     for(let i = 2; i < n; i++){
//         if (n % i == 0) {
//             console.log('not a prime');
//             return 0;
//         }
//     }
//     console.log('prime');
//     return 0;
// }

//2nd way
const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n / 2; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

// if i need to print the till 1100 prime numbers

const main = () => {
  let number = 1100,
    primeNumber = "",
    total = 0;
  for (let num = 2; num < number; num++) {
    if (isPrime(num)) {
      primeNumber += num + " ";
      total++;
    }
  }
  console.log(primeNumber);
  console.log("Total prime no : " + total);
};
main();

// isPrime(11) ? console.log('true') : console.log('false');

// 3rd way
// const isPrime = (n) => {
//     if(n <= 1)
//     return false;

//     if(n % 2 == 0 && n % 3 == 0){
//         return false;
//     }

//     for(let i = 5; i <= Math.sqrt(n); i = i + 6){
//         if(n % i == 0 || n % (i + 2) == 0){
//             return false;
//         }
//     }
//     return true;
// }

// isPrime(11) ? console.log('true') : console.log('false');
