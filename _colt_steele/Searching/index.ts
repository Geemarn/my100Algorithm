//Linear Search
function linearSearch <T>(arr:Array<T>, val:T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1
};
console.log(linearSearch(['a', 'b', 'c', 'd'], ''));


//Binary Search log(n) (faster than linear search however must be sorted)
function binarySearch <T>(arr:Array<T>, val:T): number {
  let leftPointer = 0;
  let rightPointer = arr.length - 1 ;
  let middlePointer =  Math.floor((leftPointer + rightPointer ) / 2);
  while (arr[middlePointer] !== val && leftPointer <= rightPointer) {
    if (arr[middlePointer] > val) rightPointer = middlePointer - 1;
    else leftPointer = middlePointer + 1;
    middlePointer = Math.floor((leftPointer + rightPointer ) / 2);
  }
  return arr[middlePointer] === val ? middlePointer : -1;
};

console.log(binarySearch(['a', 'b', 'c', 'd' ,'e'], 'e'));

//naive string search
function strSearch (longStr: string, str: string): number {
  let count = 0;

  for(let i = 0; i < longStr.length; i++) {
      for(let j = 0; j < str.length; j++) {
        if (longStr[i + j] !== str[j]) break;
        if (j === str.length - 1) count++;
      }
  }

  return count;
}
//kmp search
function KMPSearch (str: string, pattern: string): number {
  let lengthOfStr = str.length;
  let lengthOfPattern = pattern.length;
  let IPS = new Array(lengthOfPattern).fill(0)
  return IPS;
}

console.log(KMPSearch('i am a blessing to my world worlds', 'world'));
