function addNumber(n: number): number | String {
  let numArray = n.toString().split("");
  if (numArray.length > 2) return "not more than two digits";

  let sum = parseInt(numArray[0]) + parseInt(numArray[1]);
  return sum;
}
console.log(addNumber(29));
