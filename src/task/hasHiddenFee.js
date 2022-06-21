const hasHiddenFee = (arr, str) => {
  const newStr = +str.substring(1);
  const newArr = arr.map((item) => +item.substring(1));
  const sum = newArr.reduce((prev, curr) => {
    return (prev += curr);
  });

  return sum === newStr ? false : true;
};

console.log(hasHiddenFee(['$1'], '$4'));
