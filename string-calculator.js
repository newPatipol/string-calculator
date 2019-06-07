
function EmptyString(str) {
  if (str === '') {
    return 0;
    // eslint-disable-next-line
  } else if (!isNaN(str)) {
    const num = parseInt(str, 10);
    return num;
  } else if (str.includes(',')) {
    const chars = str.split(',');
    return [chars[0], chars[1]];
  } else if (str.includes('\n')) {
    const chars = str.split('\n');
    return chars[1] + chars[2];
  }
}
exports.EmptyString = EmptyString;
