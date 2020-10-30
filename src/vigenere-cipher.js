const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(text, key) {
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];  
  let res = [];

  text = text.split('');
  key = key.split('');

  for (let i = 0; i < arr_en.length; i++) {
    if (arr_en.includes(text[i])) {
    let x = arr_en.indexOf(text[i]);
    let y = arr_en.indexOf(key[i]);

    if (x+y > arr_en.length-1) { y = y - arr_en.length}

    res.push(arr_en[x+y]);
    } else {res.push(text[i]);}
  }
  return console.log(res.join(''));
  }    
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
