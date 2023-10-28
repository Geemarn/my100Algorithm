
function Fibonacci (n: number) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return Fibonacci(n - 1 ) + Fibonacci( n - 2 );
};

console.log(Fibonacci(4));
console.log(Fibonacci(10));
console.log(Fibonacci(28));
