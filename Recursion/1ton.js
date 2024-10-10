function fun(i, n) {
  if (i > n) return;
  console.log(i);
  fun(i + 1, n);
}
console.log(fun(1, 3));
