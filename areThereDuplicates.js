function areThereDuplicates() {
  const list = [...arguments];
  let obj = {};
  for(let i=0;i<list.length;i++){
      if(obj[list[i]]) return true;
      obj[list[i]] = 1;
  }
  return false;
}