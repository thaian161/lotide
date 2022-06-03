/* Function findKey which takes in:
    - An object 
    - A callback. 
  It should scan the object and return the first key for which the callback returns a truthy value. 
  If no key is found, then it should return undefined.
*/
// Lodash: https://lodash.com/docs/4.17.15#findKey

//findKey func
/* const callback = function ({stars:1}){
    return {start:1}.stars !== 2 => false
  const callback = function ({stars:3}){
    return {start:3}.stars !== 2 => false
  const callback = function ({stars:2}){
    return {start:1}.stars === 2 => true
}*/
const findKey = (object, callback) => {
  // Loop thru the obj
  for (let key in object) {
    //console.log(key);
    //check to see if key of the object is satisfies the callback fun or not
    if (callback(object[key])) {
      //object[key] actually return the VALUE of the obj, not the key //object[key] = value of the object

      // callback({stars:1})
      // callback({stars:3})
      // callback({stars:2}) .... continue
      // if TRUE => return key
      return key;
    }
  }
};

//===TEST CODE===
findKey(
  {
    BlueHill: { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"
