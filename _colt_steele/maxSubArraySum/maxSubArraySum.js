function maxSubArraySum (arr, num) {
  if(arr.length < num) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for(let j = 0; j < num; j++) {
      temp += arr[i + j]
    }
    if(temp > max) {
      max = temp
    }
  }
  return max;
}

//sliding windows pattern
// function maxSubArraySum2 (arr, num) {
//   if (arr.length < num) return null;
//   let max = 0;
//   let temp = 0;
//
//   for (let i = 0; i < num; i++) {
//     temp += arr[i]
//   }
//   max = temp;
//   for (let i = num; i < arr.length; i++) {
//     temp = temp + arr[i] - arr[i - num];
//     max = Math.max(temp, max);
//   }
//   return max;
// }

function maxSubArraySum2 (arr, num) {
 if(!arr.length || arr.length < num) return null
 let max = 0;
 let temp = 0;

for(let i = 0; i < num; i++) {
    temp += arr[i]
}

max = temp;

for (let i = num; i < arr.length; i++) {
    temp = temp + arr[i] - arr[i - num];
    max = Math.max(max, temp)
}
 return max

}

console.log(maxSubArraySum2([1,2,50,3,4,5,6,10,80], 3));