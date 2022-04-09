function plusMinus(arr) {
  let zeros = 0;
  let positive = 0;
  let negetive = 0;

  arr.forEach((num) => {
    return num == 0 ? zeros++ : num >= 1 ? positive++ : negetive++;
  });
  const nums = [positive, negetive, zeros];

  nums.forEach((num) => {
    let output = num / arr.length.toString();
    process.stdout.write(output.toFixed(6) + "\n");
  });
}

const nums = [-4, 3, -9, 0, 4, 1];

plusMinus(nums);
