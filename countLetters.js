const assertEqual = require('./assertEqual');

//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

//countLetter function
countLetter = (string) => {
  let resultObj = {};

  //eliminate the space between words
  string = string.replace(/[^a-zA-Z0-9]/g, ''); //g is globaly, regular expression

  for (let letter of string) {
    if (resultObj[letter] === undefined) {
      resultObj[letter] = 1;
    } else {
      resultObj[letter]++;
    }
  }
  return resultObj;
};

//===TEST CODE====
console.log(countLetter('hello')); //{ h: 1, e: 1, l: 2, o: 1 }
assertEqual(countLetter('hello'), { h: 1, e: 1, l: 2, o: 1 });

console.log(countLetter('lighthouse in the house'));
/*{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}*/
