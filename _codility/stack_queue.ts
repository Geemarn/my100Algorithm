//bracket
function brackets (S) {
  let SArray = S.split('');
  let ist = 0;
  let last = SArray.length - 1;
  if (S.length === 0) return 1;
  const newArr = SArray.map(S => checkStr(S));
  if (newArr[ist] && newArr[last] && newArr[ist]  === newArr[last]) return brackets(S.slice(1, -1));
  return 0
}

function checkStr(str) {
  let newStr;
  if (str === '{' || str === '}') newStr = '}';
  if (str === '[' || str === ']')  newStr = ']';
  if (str === '(' || str === ')') newStr = ')';
  return newStr;
}
//alternative
function solutionX(S) {
  let brackets = {
    "{": "}",
    "(": ")",
    "[": "]"
  };

  let closedBrackets = ["}", ")", "]"];

  let stack = [];

  for (let i = 0; i < S.length; i++) {
    if (brackets.hasOwnProperty(S[i])) {
      stack.push(S[i])
    } else if (brackets[stack[stack.length - 1]] == S[i]) {
      stack.pop()
    } else if (closedBrackets.indexOf(S[i]) !== -1) {
      return 0
    }
  }

  return stack.length === 0 ? 1 : 0
}

console.log(solutionX('{[()()]}'));
console.log(brackets('{[[()()]]}'));

//fish
function fish(A, B) {
  let combineArray= [];
  for(let i = 0; i < A.length; i++) {
    if(A[i]){}
  }
}

console.log(fish([4,3,2,1,5],[0,1,0,0,0]));
