//Expect an integer between 1 and 2,147,483,647
//Convert that integer into its binary value
//Return the length of the largest sequence of zeros in between ones
//Return 0 if no zeros in between ones
//ITERATIONS
function solution (N: number): number {
  // Tests if our value is an integer
  if (N === parseInt(String(N), 10) && N >= 1 && N < 2147483647) {
    // Convert to binary
    const Binary = N.toString(2).split('');
    console.log(N.toString(2));
    // calling our recursive function with initial empty gaps
    return getGaps(Binary, []);
  }
  // default if it doesn't meet the requirements
  return 0;
}

function getGaps (BinaryArray: Array<string>, gaps: Array<number>) {
  // finding the first one via its index
  const firstOne = BinaryArray.indexOf("1");
  if (firstOne > -1) {
    // new array created taking a slice of original array
    // from the index of the firstOne + 1 index
    let NewBinaryArray = BinaryArray.slice(firstOne + 1);
    // finding second one via its index in new array slice
    const secondOne = NewBinaryArray.indexOf("1");
    // accounting for no zeros
    if (secondOne > 0) {
      // adding 2 to our gaps array
      gaps.push(secondOne);
    }

    // Pass array minus second one and gaps array
    return getGaps(NewBinaryArray.slice(secondOne + 1), gaps);
  }
  // if gaps array length is empty return 0
  // otherwise return largest value in array
  return (gaps.length > 0) ? Math.max.apply(Math, gaps) : 0;
}


console.log(solution(433));
console.log(solution(51272));

/** ARRAY **/

//Cyclic rotation (rotate array by K number of times)
function solution2(A: Array<any>, K: number): Array<any> {
  const rotateArray = (arr, shiftCount) => {
    console.log(arr.slice(-0));
    console.log(arr.slice(0, -shiftCount));
    return [
    ...arr.slice(-shiftCount),
    ...arr.slice(0, -shiftCount)
  ]};
  const shiftCount: number = K % A.length;

  return shiftCount ? rotateArray(A, shiftCount) : A;
}

console.log(solution2([1,2,3,4], 1));
console.log(solution2([1,2,3,4], 3));

//odd occurrence
function solution3(A: Array<any>): string {
  let base = {};
  for (let i = 0; i < A.length; i++){
    if (base.hasOwnProperty(A[i])) {
      delete base[A[i]];
    } else {
      base[A[i]] = 1;
    }
  }
  return Object.keys(base)[0];
}

console.log(solution3([9, 3, 9, 3, 9, 7, 9]));

/** TIME COMPLEXITY **/

//frogJmp
function solution4(X: number, Y: number, D: number):number {
  if (X < Y) {
    return Math.ceil((Y-X)/D);
  }
}

console.log(solution4(10, 44, 5));

//PermMissingElem
function solution5 (A: Array<any>) {
  //uniqueness of array element
  // @ts-ignore
  if(new Set(A).size === A.length && A.length) {
    const n = A.length + 1;
    //istElem + lastElem * num of Arr divided by 2 (series)
    const sumOfSeries = (n + (n * n - n) / 2);
    const sumOfArray = A.reduce((acc, curr) => acc + curr);
    return sumOfSeries - sumOfArray;
  }

  return 1
}
console.log(solution5([1, 2, 3, 5]));



//tapeEquilibrium
/**
 * For example, consider array A such that:

 A[0] = 3
 A[1] = 1
 A[2] = 2
 A[3] = 4
 A[4] = 3
 We can split this tape in four places:

 P = 1, difference = |3 − 10| = 7
 P = 2, difference = |4 − 9| = 5
 P = 3, difference = |6 − 7| = 1
 P = 4, difference = |10 − 3| = 7
(multi pointer)
 * **/
function solution6 (A: Array<any>) {
  let left = A[0];
  let right = 0;

  for(let i = 1; i < A.length; i++) {
    right += A[i]
  }
  let min = Math.abs(left - right);
  for(let i = 1; i < A.length - 1; i++) {
    left += A[i];
    right -= A[i];
    if (min > Math.abs(left - right)) min = Math.abs(left - right)
  }
  return min
}

console.log(solution6([1, 2, 3, 5]));
