const countTrue = (arr) => {
  let counter = 0;
  arr.forEach((element) => {
    if (element) {
      counter++;
    }
  });
  return counter;
};

console.log(countTrue([]));
