
function nestedEvenSum (obj: Record<string, any>) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key])
    } else if (obj[key] % 2 === 0) {
      sum += obj[key]
    }
  }
  return sum
}

function nestedEvenSum (obj) {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;
  for(let key in obj){
    if(typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key])
    } else if (obj[key] % 2 === 0) {
      sum += obj[key]
    } else {
      sum += 0
    }
  }
  return sum
}


let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
      next: {
        superInner: 4,
        nextInner: 4,
        prev: {
          a: 4,
        }
      }
    }
  }
};

console.log(nestedEvenSum(obj1));
