// Given a roman numeral, convert it to an integer
const romanToInt = function (s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let num = 0;
    if (values[s[i]] < values[s[i + 1]]) {
      num = values[s[i + 1]] - values[s[i]];
      sum += num;
      i++;
    } else {
      sum += values[s[i]];
    }
  }

  return sum;
};

const numeral1 = "LVIII";
const numeral2 = "MCMXCIV";

const output1 = romanToInt(numeral1);
const output2 = romanToInt(numeral2);
console.log(numeral1, output1);
console.log(numeral2, output2);
