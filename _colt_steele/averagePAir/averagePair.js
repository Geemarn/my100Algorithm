//multi pointer
// function averagePair (arr, target) {
//   if (!arr.length) return false;
//   let start = 0;
//   let end = arr.length - 1;
//   while(start < end + 1) {
//     let avg = (arr[start] + arr[end]) / 2;
//     if ( avg === target){
//       return true;
//     } else if (avg < target) {
//       start++
//     } else {
//       end--
//     }
//   }
//   return false;
// }

function averagePair (arr, target) {
  if (!arr.length) return false;
  let i = 0;
  let j = arr.length - 1;

  while(i < j){
    const avg = (arr[i] + arr[j])/2;
    if(avg=== target ) {
      return true
    } else if (avg < target) {
      i++
    } else {
      j--
    }
  }
  return false;
}

console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([], 4));
