function getRandomIntInclusive(min, max) {
  if (min > 0 && !isNaN(max)) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return NaN;
  }
}


//getRandomIntInclusive(1,10);


function getStringLength (string, maxlength) {
  if (string.length <= maxlength) {
    return true;
  }else{
    return false;
  }
}


//getStringLength('Привет',10);
