module.exports = function createDreamTeam(members) {
  let result='';
  if (typeof(members) != "object" || members==null ) return false;
  else {
    for (let i=0;i<members.length;i++){
      if (typeof(members[i])!='string') continue;
    for (let j=0;j<members[i].length;j++)
    if (members[i][j]!=' ') {result+=members[i][j];break;}
    }
    return result.toUpperCase().split('').sort().join('');
  }
};