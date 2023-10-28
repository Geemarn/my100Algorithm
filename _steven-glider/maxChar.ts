
function maxChar (str) {
    let charObj = {};
    let maxChar = 0;
    let result = ''

    for (let val of str) {
        charObj[val] = charObj[val] + 1 || 1
    }
    for (let key in charObj) {
        if (charObj[key] > maxChar) {
            maxChar = charObj[key]
            result = key
        }
    }

    //slower
    // const values = Object.values(charObj)
    // console.log(values)
    //
    // return Object.keys(charObj).find(key => charObj[key] === Math.max(...values))
    return result
}

console.log(maxChar("abcccccccde"));
// console.log(maxChar("apple 1231111"))