module.exports.getKeys = function(object) {
  var result = [];
  for (var property in object) {
    result.push(property);
  }
  return result;
};

module.exports.getValues = function (object) {
  var result = [];
  for (var key in object) {
    result.push(object[key]);
  }
  return result;
};

module.exports.objectToArray = function (object) {
  var result = [];
  for (var property in object) {
    result.push(property + " is " + object[property]);
  }
  return result;
};