/**
 * Checks if the input is a string (taking into account strings
 * created using an object constructor).
 * @param  {String}  str
 * @return {Boolean}
 */
exports.isString = function (str) {
    return toString.call(str) === '[object String]';
};
