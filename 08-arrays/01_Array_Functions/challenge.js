module.exports.reversePlusOne = function( array ) {
  var result = [];
  for (var i = (array.length - 1); i >= 0; i--) {
    result.push(array[i]);
  }
  result.unshift(1);
  return result; 
};

module.exports.plusesEverywhere = function ( array ) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    result += array[i] + "+";
  }
  return result.substring(0, result.length - 1);
};

module.exports.arrayQuantityPlusOne = function ( array ) {
  return array.length + 1;
};