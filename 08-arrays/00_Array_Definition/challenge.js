module.exports.newArray = function( one, two, three, four ) {
  return [ one, two, three, four ];
};

module.exports.firstAndLast = function( array ) {
  return [array.shift(), array.pop()]
};