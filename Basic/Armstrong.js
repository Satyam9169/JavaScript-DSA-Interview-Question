const Armstrong = (num) => {
  let n = num;
  let arm = 0;
  while (num != 0) {
    let mod = num % 10;
    arm = arm + mod * mod * mod;
    num = Math.floor(num / 10);
  }
  if (arm == n) {
    return "Yes";
  }
  return "No";
  // return arm;
};

console.log(Armstrong(153));
