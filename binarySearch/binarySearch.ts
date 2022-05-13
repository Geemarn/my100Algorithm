const ar = [1, 0, 3, 2, 4, 5, 8, 9, 7, 6];

//Function to search for a number in an array.
const searchNum = (arr, num, start, end) => {
    let sortedArray = arr.sort((a, b) => a - b);
    if(start > end) return num + ' does not exist in the array';
    // get the midpoint of the array
    let midPoint = Math.floor((start + end)/2);
    console.log({sortedArray});
    console.log({midPoint});
    if(sortedArray[midPoint] === num) return num + ' found at position ' + midPoint;
    if(sortedArray[midPoint] > num) return searchNum(arr, num, start, midPoint - 1);
    if(sortedArray[midPoint] < num)return  searchNum(arr, num, midPoint + 1, end);

};

console.log(searchNum(ar, 7, 0, ar.length - 1));
