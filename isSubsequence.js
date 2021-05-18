function isSubsequence(str1, str2) {
  let i=0, j=0;
  while(j<str2.length){
      if(str1[i] === str2[j]){
          i++;
          if(str1.length === i) return true;
      }
      j++;
  }
  return str1.length === i;
}


isSubsequence('abc', 'acb');


// recursive 

function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}

isSubsequence('abc', 'acb');