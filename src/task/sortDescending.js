const sortDescending = (num) => {
  if (num < 0) return;

  return num
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
};

console.log(sortDescending(11233156784));
