/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.*/

const isValid = (s) => {
  const parens = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const stack = [];
  for (let par of s) {
    if (parens[par]) {
      stack.push(parens[par]);
    } else {
      if (par !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
};

const result1 = isValid("()[]{}");
const result2 = isValid("([{}])");
const result3 = isValid("({}({{{{}}}})){}");
const result4 = isValid("(]");
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
