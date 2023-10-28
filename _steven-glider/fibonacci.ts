function fibonacci(number: number) {
    let array = [0,1];
    for(let i=2; i <= number; i++){
        array[i] = array[i-1] + array[i-2]
    }
    return array[number]
}

console.log(fibonacci(8))

function fib(number: number) {
    if(number < 2) return number
    return fibonacci2(number - 1) + fibonacci2(number - 2)
}

function memorize(fn) {
    const cache = {};
    return function (...args: any) {
        if(cache[args]) return cache[args]
        cache[args] = fn.apply(this, args)
        return cache[args]
    }

}
// const memoTest = memorize((a,b) => a+b)
// console.log(memoTest(3,5))

const fibonacci2 = memorize(fib)
console.log(fibonacci2(30))
console.log(fib(3))