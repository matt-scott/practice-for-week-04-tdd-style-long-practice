function myMap(inputArray, callback) {
  let rtnArr = [];

  for (let i = 0; i < inputArray.length; i++) {
    rtnArr.push(callback(inputArray[i]));
  }

  return rtnArr;
}

module.exports = myMap;
