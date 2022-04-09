/*Given an array of integers, where all elements but one occur twice, find the unique element. */

function lonelyinteger(a) {
  const elements = {};

  a.forEach((element) =>
    elements[element] ? elements[element]++ : (elements[element] = 1)
  );
  for (const value in elements) {
    if (elements[value] === 1) {
      return value;
    }
  }
}

const arr = [1, 2, 3, 4, 3, 2, 1];

const output = lonelyinteger(arr);
console.log("output", output);
