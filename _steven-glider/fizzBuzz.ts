
function fizzBuzz (number: number) {
    for (let i = 1; i <= number; i++) {
        let output = ''
        if (i % 3 === 0) output += 'fizz'
        if (i % 5 === 0) output += 'buzz'
        if (i % 7 === 0) output += 'bazz'
        console.log(output || i)
    }
}

fizzBuzz(15)
// console.log(fizzBuzz(-10))
// console.log(fizzBuzz(23))