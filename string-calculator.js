
function Calculator(str) {
  if (str === '') return 0;
  // eslint-disable-no IsNaN global
  else if (!isNaN(str)) {
    if (Number(str) > 1000) { return 0; }
    return Number(str);
  } else if (Number(str) > 1000) { return 0; } else if (str.includes('\n') || str.includes(',')) {
    const num = str.split(/[\n,]/).map(Number);
    const numsort = num.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < numsort.length; i += 1) {
      if (numsort[i] >= 0 && numsort[i] <= 1000) {
        sum += numsort[i];
      } else if (numsort[i] < 0) {
        throw new Error('no negative number');
      }
    }
    return sum;
  }
}

// test output
// strva = "-12,34\n"
// const num = strva.split(/[\n,]/).map(Number);
// console.log(num[0])

// exportmodule
module.exports = { Calculator };
