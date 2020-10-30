const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === null || members === undefined || members === '') {return false}
    let res = [];
    for (let i = 0; i<members.length; i++) {  
        if (typeof(members[i]) === 'string'){      
          let arr = members[i].split(''); 
            for (x in arr) {
                if (arr[x] !== ' ') {                      
                let a = arr[x];
                res.push(a); break;
                }
            }
        } 
    }
    for (let i = 0; i<res.length; i++) {
      res[i] = res[i].toUpperCase();
    }    
    
  return res.sort().join('');
};
