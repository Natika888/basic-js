const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  switch (date) {
    case 'winter': season = 'winter';
      break;
      case 'spring': season = 'spring';
      break;
      case 'summer': season = 'summer';
      break;
      case 'fall': season = 'fall';
      break;
  }
  let month = date.getMonth();
   let season = ''; 

   if (arguments.length === 0) {season ='Unable to determine the time of year!'}
   else if (typeof month !== 'number') {throw new CustomError('argument is invalid');}

    switch (month) {
      case 2:
      case 3:
      case 4: season = 'spring';
      break;
      case 5:
      case 6:
      case 7: season = 'summer';
      break;
      case 8:
      case 9:
      case 10: season = 'fall';
      break;
      case 11:
      case 0:
      case 1: season = 'winter';
      break;
    }     
};
