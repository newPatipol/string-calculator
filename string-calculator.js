
function EmptyString(str) {
  if (str === '') {
    return 0;
    // eslint-disable-next-line
  }else if (str.includes('\n') || str.includes(',')) {
    const separators = ['\n', ','];
    const num = str.split(new RegExp(separators.join('\n'), ',')).map(Number);
    const numsort = num.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < numsort.length; i += 1) {
      if (numsort[i] <= 1000 && numsort[i] > 0) {
        sum += numsort[i];
      } else {
        throw new Error('it greater than 1000 or no negative number');
      }
    }
    return sum;
  }

  /* else if (!isNaN(str)) {
    const num = parseInt(str, 10);
    return num;
  } else if (str.includes(',')) {
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
      if (parseInt(s, 10) < 0) {
        throw new Error('negative number');
      }
      sum += parseInt(s, 10);
    }
  });
  return sum;
}
exports.EmptyString = EmptyString;
