const keysAndValues = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  return [keys, values];
};

console.log(keysAndValues({ a: 'Apple', b: 'Microsoft', c: 'Google' }));
