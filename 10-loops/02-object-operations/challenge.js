module.exports.copy = function( object ) {
  var e = {};
  for (property in object) {
     e[property] = object[property];
    }
  return e;
};

module.exports.extend = function( dest, src ) {
  // src = { foo: "bar" }
  for (property in src) {
    // property = "foo"
    // dest["foo"] = src["foo"]; // "bar"
    dest[property] = src[property];
  }
  return dest;
};

module.exports.hasElems = function( object, array ) {
  // array is list of property names
  // returns true for an empty array
  // if all property names are properties of the object, return true
  // returns false if one or more of the keys isn't in the hash
  for ( var i=0; i < array.length; i++) {
    // if property does not exist
    if (object[array[i]] === undefined) {
      return false;
    }
  }

  return true;
};