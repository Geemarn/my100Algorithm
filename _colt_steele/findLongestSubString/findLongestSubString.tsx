//sliding window
function findLongestSubString(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  console.log(seen)
  return longest;
}

// function findLongestSubString(str) {
// let longestStr = '';
// let counter = {}
//
// for (let i=0; i < str.length; i++) {
//   let char = str[i];
//   if(counter[char]) {
//     return
//   }
// }
//   return str.length;
// }
console.log(findLongestSubString('longestsubstring'));
// console.log(findLongestSubString('bbbbbbb'));
// console.log(findLongestSubString('thisisawesome'));
