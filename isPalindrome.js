/*Given an integer x, return true if x is palindrome integer.*/

const isPalindrome = function (x) {
  if (x <= 9 && x >= 0) {
    return true;
  }
  if (x < 0) {
    return false;
  }
  const nums = x.toString().split("");
  let count1 = 0;
  let count2 = nums.length - 1;
  while (count1 < count2) {
    if (nums[count1] === nums[count2]) {
      count1++;
      count2--;
    } else {
      return false;
    }
  }
  return true;
};

const num = 123321;
const result = isPalindrome(num);
console.log(result);
