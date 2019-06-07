
const stringcalculator = require('../string-calculator.js');
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

// Start Example Behaviors
function exampleBehaviors() {
  it('should be true', itAlwaysTrue);
  it('should be equal 2', itAlwaysBe2);
}

function testemptystring() {
  const testresult = stringcalculator.EmptyString('');
  expect(testresult).to.be.equal(0);
}
function testreturnstr() {
  const testresultvalue = stringcalculator.EmptyString('1');
  expect(testresultvalue).to.be.equal(1);
}

function revaluenumstr() {
  const arrayvalue = stringcalculator.EmptyString('1,2');
  expect(Number(arrayvalue[0])).to.be.equal(1);
  expect(Number(arrayvalue[1])).to.be.equal(2);
}

function checknewline() {
  const testnewline = stringcalculator.EmptyString('1\n2');
  expect(Number(testnewline)).to.be.equal(3);
}
// Start Describe
describe('Example', exampleBehaviors);
describe('emtrystring', () => { it('should be zero', testemptystring); });
describe('returnstring', () => { it('should be return', testreturnstr); });
describe('revaluenumstr', () => { it('should be sum', revaluenumstr); });
describe('checknewline', () => { it('should be sum', checknewline); });
