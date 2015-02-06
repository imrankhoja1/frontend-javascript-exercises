module.exports.stream = function(conditionalFn, actionFn) {
  var result = conditionalFn();
  while (result) {
    actionFn();
    result = conditionalFn();
  }
};

module.exports.sumNumbers = function ( array ) {
    var result = 0;
    var i = 0;
    while (i < array.length) {
      result += array[i];
      i++;
    }
    return result;
};

