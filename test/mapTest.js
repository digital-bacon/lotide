const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {

  const words = ["ground", "control", "to"];
  console.log(`when using input array: ["ground", "control", "to"]`);

  it(`should return [ "g", "c", "t" ] when given callback to return only the first letter from each word element in an array`, () => {
    const expectedResult = [ "g", "c", "t" ];
    const returnFirstLetterOfEachWord = word => word[0];
    assert.deepEqual(map(words, returnFirstLetterOfEachWord), expectedResult);
  });
  
  it(`should return ["roundgay", "ontrolcay", "otay"] when given callback for pigLatin`, () => {
    const expectedResult = ["roundgay", "ontrolcay", "otay"];
    const toPigLatin = string => string.slice(1) + string[0] + 'ay';
    assert.deepEqual(map(words, toPigLatin), expectedResult);
  });

  it(`should return ['dnuorg', 'lortnoc', 'ot'] when given a callback to reverse words in an array`, () => {
    const expectedResult = ['dnuorg', 'lortnoc', 'ot'];
    const reverse = (string) => {
        const reversed = [];
        const joined = string.split('');
        joined.forEach(character => reversed.unshift(character));
        return reversed.join('');
      };
    assert.deepEqual(map(words, reverse), expectedResult);
  });

  it(`should return ['groundground', 'controlcontrol', 'toto'] when given a callback to duplicate strings in elements of an array`, () => {
    const expectedResult = ['groundground', 'controlcontrol', 'toto'];
    const duplicate = (string) => string + string;
    assert.deepEqual(map(words, duplicate), expectedResult);
  });
  
});
