const Armstrong = (num) => {
  let n = num;
  let arm = 0;
  let k = String(num).length;
  while (n != 0) {
    let mod = n % 10;
    arm = arm + Math.pow(mod, k);
    n = Math.floor(n / 10);
  }
  if (arm == num) {
    return "Yes";
  }
  return "No";
};

console.log(Armstrong(153));
console.log(Armstrong(123)); // No
console.log(Armstrong(9474)); // Yes
