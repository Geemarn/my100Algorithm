function seekAndDestroy(arr1: number[], arr2: number[]){
    let res: number[] = [];
    for(let i=0; i<arr1.length; i++){
        if(arr2.includes(arr1[i])){
            arr1.splice(arr1.indexOf(arr1[i]), 1);
        }

        else{
            res.push(arr1[i])
        }
    }

    return res;
// by Dylan
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));