function areSimilar(a: number[], b: number[]): boolean {
  const c: number[] = [];
  let d: number[] = [];

  if (a.toString() === b.toString()) return true;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      c.push(a[i]);
      d.push(b[i]);
    }
  }

  d = d.reverse();

  if (c.length === 2 && c.toString() === d.toString()) return true;
  d = d.reverse();

  if(c.length === 2 && c.toString() === d.toString()) return true;

  return false;
}

//frequency counter
function areSimilar2(arr1: number[], arr2: number[]): boolean {
  if(arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter = {};
  for (let val of arr1) {
    frequencyCounter[val] = frequencyCounter[val] + 1 || 1;
  }
  for (let val of arr2) {
    if(!(frequencyCounter[val])) {
      return false;
    }else {
      frequencyCounter[val]--;
    }
  }
  return true;
}

console.log(areSimilar([], []));
console.log(areSimilar2([1, 2, 3, 3], [2, 1, 3, 4]));
console.log(areSimilar([1, 2, 2, 3], [2, 1, 3, 2]));
console.log(areSimilar([1, 2, 2,1,1], [2, 1, 1,2,0]));
