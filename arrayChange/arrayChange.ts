// function arrayChange(inputArray: number[]): number {
//   let count = 0;
//   for (let i = 0; i < inputArray.length; i++) {
//     if (inputArray[i] >= inputArray[i - 1]) {
//       const diff = inputArray[i] + 1 - inputArray[i + 1];
//       // console.log(diff);
//       inputArray[i + 1] = inputArray[i] + 1;
//       count += diff;
//     }
//   }
//   return count;
// }
//
// console.log(arrayChange([1, 1, 1]));

// function test (n) {
//   let array = [];
//   for(let i=0; i < n; i++){
//     if(i === 0) array[i] = 0
//     if(i === 1) array[i] = 1
//     if(2 <= 2*i <=n) array[2*i] = array[i]
//     if(2 <= 2*i + 1 <=n) array[2*i + 1] = array[i] + array[i + 1]
//   }
//
//   return array.slice(0, n+1).sort()[n]
// }

function test (s) {
  let i = 0;
  let j = 1;
  let newString  = '';

  while(j < s.length){
    if (s[i] !== s[j]) {
      i++
      j++
    }
  }

}

console.log(test('tuuuurrrrring'))