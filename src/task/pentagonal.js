const pentagonal = (num) => {
  if (num <= 0) {
    console.log('Number must be a positive');
    return;
  }
  const result = (5 * (num * num) - 5 * num + 2) / 2;

  return result;
};

console.log(pentagonal(7));
