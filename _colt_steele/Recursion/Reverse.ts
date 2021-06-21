function reverse (str: string) {
  let strArr = str.split('').reverse();
  return strArr.join('');
}

console.log(reverse('123456'));

//recursion
function reverse2 (str: string) {
  if (str.length === 1 ) return str;
  return str.slice(str.length - 1).concat(reverse2(str.slice(0, str.length - 1)));
}

console.log(reverse2('1'));
console.log(reverse2('1234567'));
console.log(reverse2('abcdefe'));


/**
 SOLUTION
 **/

function reverse3 (str: string) {
  if(str.length <= 1) return str;
  return reverse3(str.slice(1)) + str[0];
}
console.log(reverse2('1234567'));
console.log(reverse2('abcdefe'));

