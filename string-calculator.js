
function EmptyString(str) {
  if (str === '') {
    return 0;
    // eslint-disable-next-line
  } else if (!isNaN(str)) {
    const num = parseInt(str, 10);
    return num;
  }
  // eslint-disable-next-line
  if (str.includes(',')) {
    const chars = str.split(',');
    return [chars[0], chars[1]];
  }
}
exports.EmptyString = EmptyString;
