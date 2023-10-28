function reverseAString(str: string): string {
    if(str.length === 1) return str;
    // return str.split('').reverse().join('')
    let newArr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newArr += str[i]
    }
    return newArr
}

function reverse(str) {
    let reverseStr = '';
    for (let char of str) {
        reverseStr = char + reverseStr;
    }
    return reverseStr;
}

function reverse2(str) {
    return str.split('').reduce((curr, prev) => prev + curr, '')
}

console.log(reverse('hello'));
console.log(reverse2('Howdy'));
console.log(reverseAString('you are mine'));