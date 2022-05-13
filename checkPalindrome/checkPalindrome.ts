// function checkPalindrome(str) {
//     let re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     let len = str.length;
//     for (let i = 0; i < len/2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

function checkPalindrome(str) {
    let regex = /[\W_/]/g;
    let newStr = str.toLowerCase().replace(regex, '');
    let reversed = newStr.split('').reverse().join('');
    return reversed === newStr;

}



console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
console.log(checkPalindrome('1231'));
