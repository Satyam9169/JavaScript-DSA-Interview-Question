const isValid = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (isEmpty(char)) return false;

      const top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }
  return isEmpty(stack);
};

const isEmpty = (str1) => str1.length === 0;
console.log(isValid("({[]})"));
console.log(isValid("([]{})"));
console.log(isValid("{[()]}"));
console.log(isValid("(]"));
