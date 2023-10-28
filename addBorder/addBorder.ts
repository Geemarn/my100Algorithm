function addBorder(picture: string[]): any {
  //const borderLenght = picture[0].length + 2
  // let border = "";
  // for (let i = 0; i < borderLength; i++) {
  //   border = border.concat("*");
  // }

  //or this
  const border = "*".repeat(picture[0].length + 2);
  //this
  // picture.unshift(border);
  // picture.push(border);
  //or this
  const newPicture = Array.from(new Set([border])).concat(
    picture,
    Array.from(new Set([border]))
  );
  console.log(newPicture)
  for (let i = 1; i < newPicture.length - 1; i++) {
    newPicture[i] = "*".concat(newPicture[i], "*");
  }

  return newPicture;
}

console.log(addBorder(["abc", "ded"]));
// console.log(addBorder(["abc", "ded", "def"]));
