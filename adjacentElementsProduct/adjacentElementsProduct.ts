function adjacentElementProduct(array: number[]): number | string {
  // let sum: number[] = [];
  let product: number = -Infinity;
  if (array.length >= 2) {
    for (
      let index = 0, i = 0, j = 1;
      i < array.length && j < array.length;
      i++, j += 1
    ) {
      // sum[index++] = array[i] * array[j];
      if (array[i] * array[j] > product) product = array[i] * array[j]
    }
    return product
    // return sum.sort((a,b) => a - b)[sum.length - 1];
  }
  return "not a valid array";
}

console.log(adjacentElementProduct([-2, 4, -3, 2, -9, 1, -4]);
console.log(adjacentElementProduct([2, 4, 5, 3, 2, 9, 9])