function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
   const newArray=inputArray.map(item=>{
       if (item===elemToReplace) {
           return substitutionElem
       }
       else return item
   });
    return newArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));