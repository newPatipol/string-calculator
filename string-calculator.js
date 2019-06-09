function Calculator(str) {
  if (str === '') return 0;
  // eslint-disable-next-line
  else if (!isNaN(str)) {
    if (Number(str) > 1000) { return 0; }
    return Number(str);
  } else if (Number(str) > 1000) {
    return 0;
  } else if (str.includes('\n') || str.includes(',')) {
    // use Map RegEx for split
    const num = str.split(/[\n,]/).map(Number);
    const numsort = num.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < numsort.length; i += 1) {
      if (numsort[i] >= 0 && numsort[i] <= 1000) {
        sum += numsort[i];
      } else if (numsort[i] < 0) {
        // throw error to rest
        throw new Error('no negative number');
      }
    }
    return sum;
  }
}

function Testdelimeter(str) {
  if (str.includes('#')) {
    const input = str.split('\n');
    let outstr = 'ok delimeter rule';
    for (let i = 1; i < input.length; i += 1) {
      if (input[i].includes('#')) {
        outstr += 'Have delimeter in first line only';
      } else {
        outstr += 'ok delimeter rule';
      }
    }
    return outstr;
  }
}
// test output
// strva = "-12,34\n"
// const num = strva.split(/[\n,]/).map(Number);
// console.log("1\n2")
// exportmodule
// input = "#123\n123"
// str = input.split('\n')
// console.log(str)
// module.exports = { Calculator };
exports.Calculator = Calculator;
exports.Testdelimeter = Testdelimeter;
