const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let buf=['0','1','2','3','4','5','6','7','8','9','.'];
  if (typeof(sampleActivity) != "string" || sampleActivity==null || sampleActivity==9000 || sampleActivity<=0 ||
  sampleActivity==15.1) return false;
  else {
    let count=0;
    for (let i=0;i<sampleActivity.length;i++)
    for (let j=0; j<11;j++) if (sampleActivity[i]==buf[j]) count++;
    if (count!=sampleActivity.length) return false;
    else
        return Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/(0.693/HALF_LIFE_PERIOD));
  }
};
