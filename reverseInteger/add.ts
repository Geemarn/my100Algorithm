function reverseInteger(param: number): number {
  return parseInt(param.toString().split('').reverse().join('')) * Math.sign(param)
}

console.log(reverseInteger( -12));
console.log(reverseInteger(3020));
console.log(reverseInteger(1234500));
