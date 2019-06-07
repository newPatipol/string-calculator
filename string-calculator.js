
function EmptyString(str) {
  if (str === '') {
    return 0;

    // eslint-disable-next-line
  } else if (!isNaN(str)) {
    const num = parseInt(str, 10);
    return num;
  } /* else if (str.includes(',')) {
    const chars = str.split(',');
    return [chars[0], chars[1]];
  } else if (str.includes('\n')) {
    const chars = str.split('\n');
    return chars[1] + chars[2];
  }
  */

  const regexNewLineAndComma = /\n|,/;
  const strArr = str.split(regexNewLineAndComma);
  let sum = 0;
  strArr.forEach((s) => {
    if (typeof parseInt(s, 10) === 'number') {
      sum += parseInt(s, 10);
    }
  });
  return sum;
}
exports.EmptyString = EmptyString;
