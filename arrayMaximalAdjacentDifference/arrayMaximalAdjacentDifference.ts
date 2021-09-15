function arrayMaximalAdjacentDifference(array){
    let result = 0;
  let sum = [];
    if (array.length >= 2) {
      for (
        let index = 0, i = 0, j = 1;
        i < array.length && j < array.length;
        i ++, j ++
      ) {
        sum[index++] = array[i] - array[j];
      }
      return sum.sort()[sum.length-1];
    }
    return "not a valid array";
  }
  arrayMaximalAdjacentDifference([2, 4, 1, 0]);