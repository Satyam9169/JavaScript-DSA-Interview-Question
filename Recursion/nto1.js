function fun(i) {
    if (i < 1) return;
    console.log(i)
    fun(i - 1)
}
console.log(fun(3))