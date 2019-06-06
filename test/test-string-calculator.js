
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
  expect(stringcalculator.EmptyString('').to.be.equal(0));
}
// Start Describe
describe('Example', exampleBehaviors);
describe('emtrystring', () => { it('should be zero', testemptystring); });
