function f(str, left, right) {
    if (left >= right) return true
    if (str[left] !== str[right]) return false;
    return f(str, left + 1, right - 1);
}

let str = "naman";
let str1 = "malayalam"
console.log(f(str1, 0, str1.length - 1))