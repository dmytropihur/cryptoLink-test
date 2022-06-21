const minMax = (arr) => {
  let min = arr[0];
  let max = arr[0];

  arr.forEach((element) => {
    if (element < min) {
      min = element;
    } else if (element > max) {
      max = element;
    }
  });
  return [min, max];
};

console.log(minMax([1]));
