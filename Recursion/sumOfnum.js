//1st way
// function add(n, sum) {
// if (n === 0) {
//     console.log(sum)
//     return;
// }
// add(n - 1, sum + n)
//}
// console.log(add(3, 0))

function f(n) {
    if (n === 0) return 0;
    return n + f(n - 1);
}
console.log(f(3))