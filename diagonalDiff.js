/*Given a square matrix, calculate the absolute difference between the sums of its diagonals.*/

function diagonalDifference(arr) {
  // Write your code here
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  let j = arr.length - 1;

  arr.forEach((arr, i) => {
    leftDiagonal += arr[i];
    rightDiagonal += arr[j];
    j--;
  });
  const output = leftDiagonal - rightDiagonal;
  return output >= 0 ? output : output * -1;
}

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
const output = diagonalDifference(arr);
console.log(output);
