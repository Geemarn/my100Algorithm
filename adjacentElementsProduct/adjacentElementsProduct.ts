function adjacentElementProduct(array: number[]): number | string {
  // let sum: number[] = [];
  let product: number = -Infinity;
  if (array.length >= 2) {
    for (
      let index = 0, i = 0, j = 1;
      i < array.length && j < array.length;
      i++, j++
    ) {
      // sum[index++] = array[i] * array[j];
      if (array[i] * array[j] > product) product = array[i] * array[j]
    }
    return product
    // return sum.sort((a,b) => a - b)[sum.length - 1];
  }
  return "not a valid array";
}

function adjacentElementProduct(array: number[]): number | string {
  let product: number = -Infinity;
  let temp: number = array[0] * array[1];
  console.log(temp)
  if(array.length < 2) return  "not a valid array";
  if(array.length === 2) return  temp;
    for (let i = 2; i < array.length; i++) {
      temp = (temp * array[i] ) / array[i - 2]
      product = Math.max(product, temp)
    }
    return product
}

console.log(adjacentElementProduct([-2, 4, -3, 2, -9, 1, -4]);
console.log(adjacentElementProduct([2, 4, 5, 10, 3, 2, 9, 3]);
console.log(adjacentElementProduct([2, 4])