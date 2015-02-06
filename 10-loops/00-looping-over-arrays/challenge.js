module.exports.sumNumbers = function (sumNumbers) {
  var result = 0;
  for (var i = 0; i < sumNumbers.length; i++) {
    result += sumNumbers[i];
  }
  return result;
};

module.exports.splitAndLowerCaseString = function (inputString) {
  return inputString.toLowerCase().split(",");
};

module.exports.addIndex = function (inputs) {
  var result = [];
  for (var i = 0; i < inputs.length; i++) {
    result.push([i] + " is " + inputs[i]);
  }
  return result;
}
