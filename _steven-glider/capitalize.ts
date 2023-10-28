function capitalize(str: string) {
    const arr = str.split(' ')
    let newStr = []
    for (let val of arr) {
        newStr.push(val.slice(0, 1).toUpperCase() + val.slice(1))
    }
    return newStr.join(' ')
}

function capitalize2(str: string) {
    let newStr = str[0].toUpperCase();
    for(let i=1; i < str.length; i++){
        if (str[i-1] === ' ') {
            newStr += str[i].toUpperCase()
        } else {
            newStr += str[i]
        }
    }
    return newStr
}

console.log(capitalize2('hello how are you'))
console.log(capitalize('look, it is working! '))