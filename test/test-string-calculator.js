
const { Calculator } = require('../string-calculator');
const chai = require('chai');

const { expect } = chai;

// Start test cases for Example Behaviors
function itAlwaysTrue() {
  // Chai API Reference can be found at http://www.chaijs.com/api/bdd/
  expect(true).to.be.true;
}

function itAlwaysBe2() {
  expect(2).to.be.equal(2);
}

function ValueofSumLessThan1000() {
  expect(Calculator('1001')).to.equal(0);
  expect(Calculator('1002,2,3')).to.equal(5);
  expect(Calculator('1088\n80')).to.equal(80);
  expect(Calculator('1002\n10,10')).to.equal(20);
}

// Start Example Behaviors
function exampleBehaviors() {
  it('should be true', itAlwaysTrue);
  it('should be equal 2', itAlwaysBe2);
}


// Start Describe
describe('Example', exampleBehaviors);

describe('string calculator', () => {
  it('should return 0 if string"" ', () => { expect(Calculator('')).to.equal(0); });

  it('should return number form input', () => { expect(Calculator('76')).to.equal(76); });

  it('should sum numbers split by ,', () => {
    expect(Calculator('4,5')).to.equal(9);
  });

  it('should sum numbers split by newline', () => {
    expect(Calculator('4\n7')).to.equal(11);
    expect(Calculator('8 \n 6')).to.equal(14);
  });

  it('should sum numbers split by newline and ,', () => {
    expect(Calculator('1\n2\n3')).to.equal(6);
    expect(Calculator('1,2,3')).to.equal(6);
    expect(Calculator('1,2\n3')).to.equal(6);
  });
  it('should no negative numbers', () => {
    expect(() => Calculator('-1,-2')).to.throw();
  });

  it('should ignore number greater than 1000', () => {
    // function stay above
    ValueofSumLessThan1000();
  });
});

