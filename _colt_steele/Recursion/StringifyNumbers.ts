function StringifyNumbers(obj: Record<string, any>) {
  let newObj ={};
  for(let key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = StringifyNumbers(obj[key])
    } else if(typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
      next: {
        a: 4,
        b: 13,
        c: {
          d: 15
        }
      }
    }
  }
};

console.log(typeof StringifyNumbers(obj)['num']);
