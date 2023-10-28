//FrogRiverOne
function solution(X, A) {
  let sequence = [0];
  let position = -1;
  let counter = 0;

  if (X === 1 && A[0] === 1)
    return 0;

  for (let i = 0; i <= A.length - 1; i++) {

    if (A[i] <= X) {
      if (!sequence[A[i]]) {
        counter++;
      }

      sequence[A[i]] = A[i];

      if (counter === X) {
        position = i;
        break;
      }
    }
  }
  return position;
}
//alternative
function solution2(X, A) {
  //@ts-ignore
  let holdValues = new Set();
  for (let i = 0; i < A.length; i++) {
    holdValues.add(A[i]);
    if (holdValues.size == X) return i;
  }

  return -1;

}

//MaxCounters
function solution3(N, A) {
  //@ts-ignore
  let counters = new Array(N).fill(0);

  let maxCounter = 0;

  let maxToSet = 0;

  for (let i = 0; i < A.length; i++) {
    let X = A[i] - 1;

    if (X === N) {
      // lazy update all counters
      maxToSet = maxCounter;
    } else if (0 <= X && X < N) {
      // see if we needed to set it to maxToSet but havent yet
      counters[X] = Math.max(counters[X] + 1, maxToSet + 1);

      maxCounter = Math.max(counters[X], maxCounter);
    }
  }
  // update any counters to maxToSet that we havent yet
  counters = counters.map((val) => Math.max(val, maxToSet));
  return counters;
}



//missing Integer

function solution4(A) {
  var max = 0;
  var array = [];

  for (var i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      if (A[i] > max) {
        max = A[i];
      }
      array[A[i]] = 0;
    }
  }

  if (max < 1) {
    return 1;
  }

  for (var j = 1; j < max; j++) {
    if (typeof array[j] === "undefined") {
      return j;
    }
  }

  return max + 1;
}

console.log(solution4([1,2,3,4]));


//PermCheck
function solution5(A) {
  let max = 0;
  for (let i = 0; i < A.length; i++){
    if (A[i] > max) max = A[i]
  }

  if (A.length !== max) return 0;
  //@ts-ignore
  let Indexes = Array(max).fill(0);
  for (let i = 0; i < A.length; i++){
    Indexes[A[i]-1]++
  }
  let result = Indexes.indexOf(0);
  if (result === -1) {
    return 1
  } else {
    return 0
  }
}
console.log(solution5([1,2,3,4,5]));

function fizzBuzz(n) {
  // Write your code here
  for(let i = 1; i <= n; i++){
    let dividedBy3 = i%3 === 0;
    let dividedBy5 = i%5 === 0;
    if (dividedBy3 && dividedBy5){
      console.log('FizzBuzz')
    } else if (dividedBy3) {
      console.log('Fizz')
    } else if(dividedBy5){
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

console.log(fizzBuzz(55))

