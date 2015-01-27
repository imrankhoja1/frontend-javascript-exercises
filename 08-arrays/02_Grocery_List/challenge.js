module.exports.addItem = function ( item, list ) {
  if (list.indexOf(item) == -1) {
    list.push(item);
    return list;
  } else {
    return list;
  }
};

module.exports.reverseSortedList = function ( array ) {
  array = array.sort();
  var result = [];
  while (array.length > 0) {
    result.push(array.pop());
  }
  return result;
};