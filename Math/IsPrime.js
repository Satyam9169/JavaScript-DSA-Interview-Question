const isPrime = (num) => {
  if (num <= 1) return 0;
  if (num % 2 === 0 && num !== 2) return 0;
  if (num % 3 === 0 && num !== 3) return 0;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return 0;
  }
  return 1;
};

function main() {
  const num = 2399991;
  console.log(isPrime(num));
}

main();
