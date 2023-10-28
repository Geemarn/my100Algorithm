//frequency counter pattern
function isSubsequence (str1, str2) {
  if(!str1) return true;

  let i = 0;
  let j = 0;

  while ( j < str2.length ) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++
  }
  return false
}

function commonSubstring (str1, str2) {
  if(!str1 || !str2) return true;
  let subString = '';

  for (let i=0; i < str1.length; i++) {
    console.log(str1[i])
    for (let j=0; j < str2.length; j++) {
      if(i === 0 && str1[i] === str2[j]) {
        console.log(j)
        console.log(str2[j])
        subString += str1[i]
      }
    }
  }
  console.log(subString)

  return ''
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'cba'));
console.log(isSubsequence('abcdxyz', 'xyzabcd'));

function subsequence (str1, str2) {
  let isTrue = true;
    if (str1.length <= str2.length) {
      for (let val of str1) {
        if(!str2.includes(val)) {
          isTrue = false
        }
      }
    } else isTrue = false
    return isTrue
}

console.log(subsequence('hello', 'hello world'));
console.log(subsequence('sing', 'sting'));
console.log(subsequence('abc', 'cba'));
console.log(subsequence('abcdxyz', 'xyzabcd'));