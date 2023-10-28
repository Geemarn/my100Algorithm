function allLongestString(array: string[]): string[] {
  // //get the length longest string in the array
  let longString = array.sort((a, b) => {
    return b.length - a.length;
  })[0].length;
  // //filter array by the longest string
  let longestStrings = array.filter((element) => element.length === longString);
  return longestStrings;
  // let longestStr = 0;
  // let longestStrArray = [];
  // for(let i = 0; i < array.length; i++) {
  //   longestStr = Math.max(array[i].length);
  // }
  // for (var val of array) {
  //   if(longestStr === val.length)
  //   longestStrArray.push(val)
  // }
  // return longestStrArray
}

function allLongestString(array: string[]): string[] {
 if(!array.length) return [];
 if(array.length === 1) return array;
 let newArr = [];

  for(let i = 0; i < array.length; i++) {
    console.log(array[i])
    if(array[i].length >= array[i + 1].length) {
      newArr.push(array[i])
      console.log(array[i], i)
    }
  }
return newArr
}

console.log(allLongestString(['aaa', 'aaa', "damian", "eme", "james", "damiank"]))
