/** swap **/
const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

/** Bubble sort O(n2) **/
function bubbleSort <T>(arr: Array<T>) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if ( arr[j] > arr[j + 1]) {
        swap(arr, j, j+1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([12, 11, 13, 17, 19, 6]));

/** selection sort O(n2) (better than bubble sort)**/
function selectionSort <T>(arr: Array<T>) {
  for (let i = 0; i < arr.length; i++) {
    let lowestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowestIndex] > arr[j]) {
        lowestIndex = j
      }
    }
    if (i !== lowestIndex) swap(arr, i, lowestIndex);
  }
  return arr;
}

console.log(selectionSort([12, 11, 13, 17, 19, 6]));

/** insertion sort O(n2) **/
function insertionSort <T>(arr: Array<T>) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1]= currentVal;
  }
  return arr;
}

console.log(insertionSort([12, 11, 13, 17, 19, 6, 1, -4, 0]));

/** merge two sorted arrays **/
function mergeArray <T>(arr1: Array<T>, arr2: Array<T>) {
  let resultArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      resultArr.push(arr1[i]);
      i++
    } else {
      resultArr.push(arr2[j]);
      j++
    }
  }
  while (i < arr1.length) {
    resultArr.push(arr1[i]);
    i++
  }
  while (j < arr2.length) {
    resultArr.push(arr2[j]);
    j++
  }
  return resultArr;
}

console.log(mergeArray([11, 13, 17, 19], [ -4, 0, 1]));

/** merge sort O(n2) **/
function mergeSort <T>(arr1: Array<T>, arr2: Array<T>) {
  let resultArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      resultArr.push(arr1[i]);
      i++
    } else {
      resultArr.push(arr2[j]);
      j++
    }
  }
  while (i < arr1.length) {
    resultArr.push(arr1[i]);
    i++
  }
  while (j < arr2.length) {
    resultArr.push(arr2[j]);
    j++
  }
  return resultArr;
}

console.log(mergeSort([11, 13, 17, 19], [ -4, 0, 1]));

function findEvenIndex(arr) {
  //sliding window pattern
  let leftSum = 0;
  //add all values in the array
  let rightSum = arr.reduce((acc, curr) => acc + curr , 0)

  for (let i=0; i < arr.length; i++){
    //add array element to leftsum
    if(i > 0) leftSum += arr[i - 1];
    console.log(leftSum)
    //subtract arr element from rightSum
    rightSum -= arr[i]
    console.log(rightSum)
    // return index if leftSum equals rightSum
    if (leftSum === rightSum) return i
  }

  //if no returned value return -1
  return rightSum

}

console.log(findEvenIndex([1,2,3,4,3,2,1]))

function twoSum(numbers, target) {
  //take ist number and loop other through it
  for(let i=0; i < numbers.length - 1; i++) {
    for(let j=1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if(sum === target) return [i, j]
    }
  }
  return [0, 0]
}

console.log(twoSum([-783, 694, 873, 191, 877, 715], 1068))


//KMPSearch
function KMPSearch(text, pat) {
  //calc length of text and pattern
  const textlen = text.length;
  const patlen = pat.length;


}
