function alphabetSubsequence(s: string): boolean {
  const chars: string[] = s.split("");
  let charValues: Number[] = [];

  chars.forEach((char: string) => charValues.push(char.charCodeAt(0)));
  console.log(charValues)

  if (new Set(charValues).size !== charValues.length) {
    return false;
  }
  for (let i = 0; i < charValues.length; i++) {
    if (charValues[i] <= charValues[i - 1]) return false;
  }

  return true;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
// console.log(alphabetSubsequence("cdce"));
// console.log(alphabetSubsequence("ace"));
// console.log(alphabetSubsequence("abcsz"));
// console.log(alphabetSubsequence("bxz"));
// console.log(alphabetSubsequence("bdxyz"));
