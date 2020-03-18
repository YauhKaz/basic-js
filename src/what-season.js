module.exports = function getSeason(date) {
  if(date==null) return 'Unable to determine the time of year!';
  else{
    if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error();    
    else {  
      let month = date.getMonth();  
  if (month<0 || month>12) return 'Error';
  else {
  let season = ['winter', 'spring', 'summer', 'autumn'];
  switch(month){
    case 0: return season[0];
    case 1: return season[0];
    case 2: return season[1];
    case 3: return season[1];
    case 4: return season[1];
    case 5: return season[2];
    case 6: return season[2];
    case 7: return season[2];
    case 8: return season[3];
    case 9: return season[3];
    case 10: return season[3];
    case 11: return season[0];
    default: return 'Error';
  }
  } 
}
}
};
