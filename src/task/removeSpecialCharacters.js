const removeSpecialCharacters = (str) => {
  const result = str.replace(/[^a-zA-Z0-9-_ ]/g, '');

  return result;
};

console.log(removeSpecialCharacters('D0n$c sed 0di0 du1'));
