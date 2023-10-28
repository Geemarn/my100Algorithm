function CapitalizeIst(arr: string[]) {
  if (arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  const slicedArr = CapitalizeIst(arr.slice(0, -1));
  const str = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length - 1)[0].substr(1);
  slicedArr.push(str);
  return slicedArr
}

function CapitalizeIst (arr: Array<string>) {
  if(arr.length === 1) return [arr[arr.length - 1][0].toUpperCase() + arr[arr.length - 1].slice(1)];
  const sliceArr = Capitalize(arr.slice(1))
  return Capitalize(arr.slice(1))
}

console.log(CapitalizeIst(['der','taco','d', 'banana']));

function Capitalize(arr: string[]) {
  if (arr.length === 1) return [arr[0].toUpperCase()];
  let slicedArr = Capitalize(arr.slice(0, -1));
  slicedArr.push(arr.slice(arr.length -1)[0].toUpperCase());
  return slicedArr
}

console.log(Capitalize(['', 'c', 'Der','taco','d', 'banana', 'a']));

function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];

  function capitalize(arrInput) {
    if(arrInput.length <= 0) return;
    if(arrInput[0].length > 0) {
      newArr.push(arrInput[0][0].toUpperCase() + arrInput[0].slice(1));
    } else {
      newArr.push(arrInput[0])
    }
    return capitalize(arrInput.slice(1))
  }
  capitalize(arr)

  return newArr
}

console.log(capitalizeFirst(['', 'c', 'Der','taco','d', 'banana', 'a']));

console.log([1,2,3,4].slice(1,2))