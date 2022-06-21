const jazzify = (arr) => {
  const resultArr = [];
  arr.forEach((element) => {
    if (element.includes('7')) {
      resultArr.push(element);
    } else {
      resultArr.push((element += 7));
    }
  });
  return resultArr;
};

console.log(jazzify([]));
