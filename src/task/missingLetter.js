const missingLetter = (str) => {
  let currCharCode = str.charCodeAt(0);
  let result = 'No Missing Letter';

  str.split('').forEach((letter) => {
    if (letter.charCodeAt(0) === currCharCode) {
      currCharCode++;
    } else {
      result = String.fromCharCode(currCharCode);
    }
  });

  return result;
};

console.log(missingLetter('tuvxyz'));
