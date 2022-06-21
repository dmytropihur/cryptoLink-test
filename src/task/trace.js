const trace = (arr) => {
  let result = 0;
  arr.forEach((item, index) => {
    result += item[index];
  });

  return result;
};

console.log(
  trace([
    [1, 0, 1, 0],
    [0, 2, 0, 2],
    [3, 0, 3, 0],
    [0, 4, 0, 4],
  ])
);
