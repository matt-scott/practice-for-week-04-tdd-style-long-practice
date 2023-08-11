function reverseString(string) {
  if (typeof string !== 'string') {
    throw TypeError('Argument must be a string!');
  }

  let newString = ('');
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
};

module.exports = reverseString;
