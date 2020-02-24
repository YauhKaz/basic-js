module.exports = function countCats(array) { 
  let number=0;
  for (let i=0;i<array.length;i++){
  for (let j=0;j<array[i].length;j++)
  {
    if (array[i][j]=="^^") {number++;}
  }
}
  return number;
  // remove line with error and write your code here
};

