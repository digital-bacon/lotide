const assert = require('chai').assert;
const countLetters = require('../lib/countLetters');

describe("#countLetters", () => {
  
  it('should return an object with correct letter counts when given a word', () => {
    const input = 'Apple';
    const expectedResult = { A: 1, p: 2, l: 1, e: 1 };
    assert.deepEqual(countLetters(input), expectedResult);
  });
  
  it('should return an object with correct letter counts when given a phrase', () => {
    const input = 'Apple Apple Apple';
    const expectedResult = { A: 3, p: 6, l: 3, e: 3 };
    assert.deepEqual(countLetters(input), expectedResult);
  });

  it('should not count spaces', () => {
    const input = 'Ap pl e';
    const expectedResult = { A: 1, p: 2, l: 1, e: 1 };
    assert.deepEqual(countLetters(input), expectedResult);
  });

  it('should return an empty object if not given a word or phrase', () => {
    const expectedResult = {  };
    assert.deepEqual(countLetters(), expectedResult);
  });

  it('should return an empty object if given anything but a string', () => {
    const input = 122564;
    const expectedResult = {  };
    assert.deepEqual(countLetters(input), expectedResult);
  });

});