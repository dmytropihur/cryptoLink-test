const ascDesNone = (arr, srt) => {
  switch (srt) {
    case 'Asc':
      return arr.sort((a, b) => a - b);
    case 'Des':
      return arr.sort((a, b) => b - a);
    case 'None':
      return arr;
    default:
      break;
  }
};

console.log(ascDesNone([7, 8, 11, 66], 'Des'));
console.log(ascDesNone([7, 8, 2, 66], 'Asc'));
console.log(ascDesNone([7, 8, 11, 66], 'None'));
