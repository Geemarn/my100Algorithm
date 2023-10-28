function alphabeticShift(inPutString: string) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let arrayString = inPutString.split("");
  let newArray = [];
  for (let i = 0; i < inPutString.length; i++) {
    const alp = alphabet[alphabet.indexOf(arrayString[i]) + 1];
    if(alp) {
      newArray.push(alp)
    } else {
      newArray.push(alphabet[0])
    }
  }
  return newArray.join('')
}

console.log(alphabeticShift("abxzz"));
console.log(alphabeticShift("crazy"));