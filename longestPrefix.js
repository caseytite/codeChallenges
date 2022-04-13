/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". */

const longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  for (let i = 0; i <= strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
};
const arr = ["filler", "flowers", "flight", "flower"];
const output = longestCommonPrefix(arr);
console.log(output);
