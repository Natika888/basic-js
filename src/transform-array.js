const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const conditions = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let res = [];

  if (!Array.isArray(arr)) {
    throw new Error('Not implemented');
  }

  for ( let i = 0; i< arr.length; i++) {
    if (!conditions.includes(arr[i])) {
      res.push(arr[i]);
    } else {
      switch (arr[i]) {
        case '--discard-prev': 
          if (i-2 > 0 && arr[i-2] === '--discard-next') break;
             else if (i-1 >0 || i-1 === 0) {res.pop();}
          break;

        case '--discard-next':   
          if (i+1 < arr.length) {i++}
          break;

        case '--double-next': 
          if (i+1 < arr.length) {res.push(arr[i+1]);}
            else {i++}
          break;

        case '--double-prev': 
          if (i-2 > 0 && arr[i-2] === '--discard-next') break;
            else if (i-1 >0 || i-1 === 0) {res.push(arr[i-1]);}
            else {i++}
          break;

      }
    }
  }
  return res;
};
