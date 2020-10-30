const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;     
      for( x in matrix) {
        for (let i = 0; i<matrix[x].length; i++ ) {
        if (matrix[x][i] === '^^') {count++;}
      }    
    } return count;
};
