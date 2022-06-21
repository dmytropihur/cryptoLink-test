const findLargestNums = (arrays) => {
  const resultArr = [];
  arrays.forEach((arr) => {
    resultArr.push(Math.max(...arr));
  });

  return resultArr;
};

console.log(
  findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ])
);
