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

  for (let i = 0; i < inPutString.length; i++) {
    console.log(alphabet[alphabet.indexOf(arrayString[i]) + 1]);
  }
}
alphabeticShift("abxzz");