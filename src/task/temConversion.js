const tempConversion = (num) => {
  if (typeof num !== 'number') {
    console.log('Your value is not a number');
    return;
  }
  const fahrenheit = (num * 9) / 5 + 32;
  const kelvin = num + 273.15;

  return [fahrenheit, kelvin];
};

console.log(tempConversion(true));
