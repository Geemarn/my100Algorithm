function allLongestString(array: string[]): string[] {
  let longString = array.sort((a, b) => {
    return b.length - a.length;
  })[0].length;

  let longestStrings = array.filter((element) => element.length == longString);

  return longestStrings;
}

allLongestString(["damian", "eme", "james", "damian"]);
