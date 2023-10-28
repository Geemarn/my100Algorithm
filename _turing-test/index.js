function isPrime (num) {
    if (typeof num === 'string') return false
    for(let i = 2; i <= num/2; i++) {
        if(num % i === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(3))


function factorial (num) {
    if (num === 1) return 1
    return num * factorial(num - 1)
}
console.log(factorial(3))

function removeWhiteSpace (str) {
    return str.replaceAll(/\s/g, '')
}
console.log(removeWhiteSpace('hello,      ade   g'))



function maxProfit (arr) {
    let min = Infinity;
    let max = 0;

    for(let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i])
        if (arr.indexOf(min) < i) {
            max = Math.max(max, arr[i])
        }
    }
    return [min, max]
}
console.log(maxProfit([7,8,1,0,10,22,4,8,30]))