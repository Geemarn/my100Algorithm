//frequency counter pattern
function anagram (str1, str2) {
    if(formatString(str1).length !== formatString(str2).length) return false;
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
    for(let val of formatString(str1)) {
        frequencyCounter1[val] = frequencyCounter1[val] + 1 || 1
    }
    for (let val of formatString(str2)) {
        frequencyCounter2[val] = frequencyCounter2[val] + 1 || 1
    }
    for (let val in frequencyCounter1) {
        if(frequencyCounter1[val] !== frequencyCounter2[val]) return false
    }
    return true
}
function anagram2 (str1, str2) {
    if(formatString(str1).length !== formatString(str2).length) return false;
    const frequencyCounter = {};
    for(let val of formatString(str1)) {
        frequencyCounter[val] = frequencyCounter[val] + 1 || 1
    }
    for (let val of formatString(str2)) {
        if(!frequencyCounter[val]) {
            return false
        }
        frequencyCounter[val]--
    }
    return true
}

function anagram3 (str1, str2) {
    if(formatString(str1).length !== formatString(str2).length) return false;

    return formatString(str1).split('').sort().join('') === formatString(str2).split('').sort().join('')
}

function formatString (str) {
    return str.replace(/[^a-zA-Z]/ig, '').toLowerCase();
}

console.log(anagram3('silent','listen'))
console.log(anagram3('RAIL! SAFETY!','fairy tales'))