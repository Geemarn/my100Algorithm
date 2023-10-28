//frequency counter pattern
// function validAnagram (str1, str2) {
//
//   //check if two strings are equal
//   if (str1.length !== str2.length) {
//     return false;
//   }
//
//   //setup frequency check for str1
//   let frequencyCounter1 = {};
//
//   for(let val of str1) {
//     frequencyCounter1[val] = frequencyCounter1[val] + 1 || 1
//   }
//   for (let val of str2) {
//     if(!(frequencyCounter1[val])) {
//       return false
//     } else {
//       frequencyCounter1[val] -= 1;
//     }
//   }
//   return true
// }

function validAnagram(str1, str2){
  if (str1.length !== str2.length) {
    return false;
  }
//set a counter for both string
  let lookup = {};
  for (let char of str1){
    //increase char in counter by 1 if exist else set to 1
    lookup[char] = ++lookup[char] || 1
  }
  for (let char of str2){
    //check if char in lookup1 exist in lookup2 and reduce by 1 else set to false
    if (lookup[char]) {
      --lookup[char];
    } else {
      return false
    }
  }
  return true;
}

function validAnagram2(str1, str2) {
  const arr1 = str1.split('').sort()
  const arr2 = str2.split('').sort()
  return arr1.join(',') === arr2.join(',')

}

console.log(validAnagram2('1silen2#t', '2listen1#'));
console.log(validAnagram('', ''));
console.log(validAnagram('aazr', 'zzar'));
console.log(validAnagram('texttwisttime', 'timetwisttext') );


function sumToZero(arr) {
  let start = 0;
  let end = arr.length - 1;

  while(start !== end) {
    const sum = arr[start] + arr[end];
    if(sum === 0) {
      return [arr[start], arr[end]]
    } else if(sum > 0) {
      --end;
    }else if (sum < 0) {
      ++start
    }
  }
  return undefined
}

console.log(sumToZero([-3,-2,-1,0,1,2,3,4]));
console.log(sumToZero([-3,-2,-1,0,11,12,13,14]));
console.log(sumToZero([-3,-2,-1,0,1,4,5,6]));




// function countUniqueValue(arr) {
//   let start = 0;
//   if(arr.length === 0) return 0;
//   for(var i = 1; i < arr.length; i++) {
//     if(arr[start] !== arr[i]) {
//       ++start;
//       arr[start] = arr[i]
//     }
//   }
//   return start + 1
// }

function countUniqueValue(arr) {
  if(arr.length === 0) return 0;
  let counter = {};

  for (let val of arr) {
      counter[val] = counter[val] + 1 || 1
  }
  return Object.keys(counter).length
}
function count (arr) {
  return new Set(arr).size
}

console.log(count([-3,-2,-1,0,1,2,3,4,-3]));
console.log(countUniqueValue([-3,-2,-1,0,1,2,3,4,-3]));
console.log(count([-3,-2,-1,0,11,12,13,14]));
console.log(countUniqueValue([-3,-2,-1,0,11,12,13,14]));
console.log(count([-3,-2,1,1,1,1,4,5,6]));
console.log(countUniqueValue([-3,-2,1,1,1,1,4,5,6]));
console.log(count([-3,1,1,1,1,1,1,1,1]));
console.log(countUniqueValue([-3,1,1,1,1,1,1,1,1]));
console.log(count([-2,-1,-1,0,1,2]));
console.log(countUniqueValue([-2,-1,-1,0,1,2]));
console.log(count([]) );
console.log(countUniqueValue([]) );

const food = {
  amount: 10,
  increase: function (num) {
    this.amount = num
  }
}

const food2 = {
  amount: 20,
}

console.log(food.increase.apply(food2, [100]))
console.log(food2)
//How Would you fix this?

let view;
function init() {
  let count = 0;
  return () => {
    if(count > 0) {
      return
    } else {
      count++;
      view= 'true';
      console.log('this has been called')
    }
  }
}
const initOnce = init()
initOnce()
initOnce()
initOnce()

function memorizeMe() {
  let cache = {};
  return (n) => {
    if(n in cache){
      console.log('cahed!!!!!!')
      return cache[n]
    } else {
      console.log('computing!!!!!!')
      cache[n] = n + 100
      return cache[n]
    }
  }
}
const memorize = memorizeMe();
console.log(memorize(5))
console.log(memorize(5))

const compose = (fn, gn) => (data) => fn(gn(data));
const pipe = (fn, gn) => (data) => gn(fn(data));
const composer  = compose((data) => (data**2), data=> (data+10))
const piper  = pipe((data) => (data**2), data=> (data+10))
console.log(composer(0))
console.log(piper(5))

const urls =['https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums']

const getData = async () => {
  const arrayOfPromises = await urls.map(url => fetch(url))
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data)
  }
}
getData()

function turing (str) {
  let newStrObj=  {};
  let newStr=  '';

  for(let val of str){
    if(!newStrObj[val]) {
      newStrObj[val] = 1
    } else if (newStrObj[val] >= 3) {
      newStrObj[val] = newStrObj[val]
    } else {
      newStrObj[val] += 1
    }
  }

  for(let key in newStrObj) {
    newStr += key.repeat(newStrObj[key])
  }

  return newStr
}

function turing(str) {
  let freq = {};
  let newStr= ''

  for(let val of str){
    freq[val] = freq[val] + 1 || 1;
    if(freq[val] >  3) {
      freq[val] = 3
    }
  }
  // for (let key in freq) {
  //   if(freq[key] >  3) {
  //     freq[key] = 3
  //   }
  // }
  for(let key in freq) {
    let result = key.repeat(freq[key])
    newStr += result
  }
  return newStr
}

console.log(turing('tuuuuurrrrrrringggggg'))
console.log(turing('tttttttttttuuuuurrrrrrringggggg'))
