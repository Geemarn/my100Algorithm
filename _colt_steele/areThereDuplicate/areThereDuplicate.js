//solution1 => frequency counter
function areThereDuplicate (...args) {
  let frequencyCount = {};
  for (let val of args) {
    frequencyCount[val] = (frequencyCount[val] || 0) + 1;
  }
  for(let key in frequencyCount) {
    if (frequencyCount[key] > 1) return true
  }
  return false
}

console.log(areThereDuplicate(5,2,2,1));
console.log(areThereDuplicate(1,2,3,1));
console.log(areThereDuplicate(2,3,4,5));
console.log(areThereDuplicate('a','b', 'a'));

function areThereDuplicate1 (...args) {
  args.sort((a,b) => a - b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    } else {
      start++;
      next++;
    }
  }
  return false
}

console.log(areThereDuplicate1(5,2,1,2,1));
console.log(areThereDuplicate1(1,2,3,1));
console.log(areThereDuplicate1(2,3,4,5));
// console.log(areThereDuplicate1('a','b', 'a'));

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(5,2,1,2,1));
console.log(areThereDuplicates(1,2,3,1));
console.log(areThereDuplicates(2,3,4,5));
console.log(areThereDuplicates('a','b', 'a'));
