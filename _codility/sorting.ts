//Distinct
function solution(A) {
  const count = {};
  for(let val of A) {
    count[val] = 1
  }
  return(Object.keys(count).length)
}

console.log(solution([1,2,3,1,2,3]));

//MaxProductOfThree
function solution2(A) {
  A.sort((a, b)=>(a - b));
  console.log(A)
  let type1 = A[0]*A[1]*A[A.length-1];
  let type2 = A[A.length-1]*A[A.length-2]*A[A.length-3];
  return Math.max(type1, type2);
}

console.log(solution2([1, 10, 2, 9, 3,1,2,3]));

//NumberOfDiscIntersections
function solution3(A) {
  const numPoints =  A.length;
  let numIntersections = 0;
  let startAndEndPoints = A.map((currentDisc, i) => [i - A[i], i + A[i]]);
  console.log(startAndEndPoints);
  // [[5,5], [0,4], [-4, 6]] => [[-4, 6], [0,4], [5,5]]
  //sorting by the start
  startAndEndPoints = startAndEndPoints.sort((a,b) => a[0] - b[0]);
  console.log(startAndEndPoints);

  for (let j = 0; j < numPoints; j++) {
    const discPoint = startAndEndPoints[j];
    const discEndPoint = discPoint[1];
    for (let k = j + 1; k < numPoints; k++){
      const comparisonDisc = startAndEndPoints[k];
      const comparisonStartPoint = comparisonDisc[0];
      if (comparisonStartPoint <= discEndPoint) {
        // comparison disc is within this disc's area
        numIntersections++;
        if (numIntersections >10000000){
          return -1;
        }
      } else {
        // all other discs will be further right than this disc
        break;
      }
    }
  }
  return numIntersections;
}

console.log(solution3([1, 5, 2, 1, 4, 0]));

//triangle
function solution4(A) {
  if (A.length < 2) return 0;
  A = A.sort((a,b) => a-b);
  for (let i = 0; i < A.length-2; i++){
    if (A[i]+A[i+1] > A[i+2] && A[i+1]+A[i+2] > A[i] && A[i]+A[i+2] > A[i+1]) {
      return 1
    }
  }

  return 0

}
console.log(solution4([10, 2, 5, 1, 8, 20]));

