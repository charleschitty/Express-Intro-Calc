const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  validNums = [];
  for (num in strNums){
    try{
      validNums.push(Number(num));
    }catch{
      throw new BadRequestError(`${num} is not a number`)
    }
  }
  return validNums;
}


module.exports = { convertStrNums };