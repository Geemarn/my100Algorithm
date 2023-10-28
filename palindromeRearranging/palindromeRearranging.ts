function palindromeRearranging(inputString: string): boolean {
    if(inputString.length === 1) return true;
    return inputString.split('').reduce((curr, prev) => prev + curr, '') === inputString
}

function palindromeRearranging2(inputString: string): boolean {
    if(inputString.length === 1) return true;
    return inputString.split('').every((val, i) => val === inputString[inputString.length - i - 1])
}

function palindromeRearranging3(inputString: string): boolean {
    if(inputString.length === 1) return true;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] !== inputString[inputString.length - i - 1]) return false
    }
    return true
}


function palindromeRearranging4(inputString: string): boolean {
    const inputArr = inputString.split('')
    console.log(inputArr.sort((a, b)=> a.localeCompare(b)))
    console.log(inputArr.sort((a, b)=> b.localeCompare(a)))
    if(inputString.length === 1) return true;
    return inputArr.sort((a, b)=> a.localeCompare(b)).join('') === inputArr.sort((a,b) => b.localeCompare(a)).join('')
}

console.log(palindromeRearranging4('aabbst'));
console.log(palindromeRearranging4('acbbca'));

