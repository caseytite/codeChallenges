/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.*/

const twoSum = function (nums, target) {
  const sorted = [...nums];
  const arr = sorted.sort((a, b) => a - b);
  const output = [];
  let count1 = 0;
  let count2 = arr.length - 1;

  for (let i = 0; i < sorted.length; i++) {
    let firstNum = arr[count1];
    let secondNum = arr[count2];
    if (sorted[count1] + sorted[count2] === target) {
      output.push(nums.indexOf(firstNum));
      output.push(nums.lastIndexOf(secondNum));
      return output;
    } else if (sorted[count1] + sorted[count2] > target) {
      count2--;
    } else if (sorted[count1] + sorted[count2] < target) {
      count1++;
    }
  }
  return output;
};

// const arr = [2, 7, 11, 15];
const arr = [3, 2, 4];
// const arr = [];
const result = twoSum(arr, 6);
console.log(result);
