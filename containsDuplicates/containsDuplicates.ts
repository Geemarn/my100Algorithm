function containsDuplicates(element: number[]): boolean {
  let isDuplicate: boolean = false;
  let array: number[] = element.sort(); // sort the array to reduce search

  for (let start = 0, end = start + 1; end < array.length; end++, start++) {
    if (array[start] == array[end])  {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicates([2, 1, 2]));
console.log(containsDuplicates([3, 5, 1, 6, 7]));
