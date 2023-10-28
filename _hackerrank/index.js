//hackerrank day 2
function lonelyinteger(a) {
    // Write your code here
    let start = 0;
    let next = 1;
    let sortedArr = a.sort((a, b) => a-b)

    while(start < a.length) {
        if(sortedArr[start] !== sortedArr[next]) {
            return sortedArr[start]
        } else {
            start += 2;
            next += 2;
        }
    }
}

console.log(lonelyinteger([1,2,3,4,3,2,1]))
console.log(lonelyinteger([5,1,2,7,3,4,3,2,1,5,4]))

function squareMatrix(a) {
    let rightDiagonal = 0;
    let leftDiagonal = 0;

    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < a[i].length; j++) {
            if(i === j){
                rightDiagonal += a[i][j]
            }
            if(i + j === a.length - 1) {
                leftDiagonal += a[i][j]
            }
        }
    }
    return Math.abs(rightDiagonal - leftDiagonal)
}

console.log(squareMatrix([[11,2,4],[4,5,6],[10,8,-12]]))

function countingSort(arr) {
    const maxValue = Math.max(...arr)
    const newArr = new Array(maxValue + 1).fill(0)
    // Write your code here
    for(let i=0; i< arr.length; i++){
        newArr[arr[i]] += 1
    }
    return newArr
}

console.log(countingSort([1,1,3,2,1]))

function flippingMatrix(matrix) {
    let n = matrix.length/2
    let max = 0;
    let total = 0;

    // Write your code here
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
           max = Number.MIN_VALUE;
           max = Math.max(matrix[i][j], max);
           max = Math.max(matrix[i][2*n - j - 1], max);
           max = Math.max(matrix[2*n - i - 1][j], max);
           max = Math.max(matrix[2*n - i - 1][2*n - j - 1], max);
           total += max
        }
    }
    console.log(total)
}

console.log(flippingMatrix([[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]]))