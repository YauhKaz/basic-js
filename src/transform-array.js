module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error()
    else
    {
      let buf=[];
        for (let i=0; i<arr.length;i++)
        {
          switch(arr[i])
          {
            case '--discard-next':break;
            case '--discard-prev': { if (i>0) buf.pop();break; }
            case '--double-next': {if (arr.length-1>i) buf.push(arr[i+1]);break;}
            case '--double-prev': { if (i>0) buf.push(arr[i-1]);break;}
            default: {if (arr[i-1]!='--discard-next') buf.push(arr[i]);break;}
          }
        }
        return buf;
    }    
};
