// Function that takes in an array of numbers and returns the smallest number not present in the array of numbers supplied.
// If the numbers supplied are less than 1 the function should return 1

const smallestMissingNum = (arr) => {
    const nums = [...Array(1000).keys()];
    let ansArr = [];

    for(let i=1; i<arr.length; i++){
        if(!arr.includes(nums[i])){
            ansArr.push(nums[i]);
        }
    }

    return Math.min(...ansArr);

};

console.log(smallestMissingNum([0, 1, 2,4, 5]));