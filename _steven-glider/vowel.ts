function vowels(str) {
    let count = 0;
    let vowel = ['a', 'e', 'i', 'o', 'u']
    for(let char of str) {
        if (vowel.includes(char)) {
            count++
        }
    }
    return count
}

//using regex
function vowels2(str) {
   const match =  str.match(/[aeiou]/gi)
    return match ? match.length : 0
}
console.log(vowels2('hi there'))
console.log(vowels2('yoew'))


