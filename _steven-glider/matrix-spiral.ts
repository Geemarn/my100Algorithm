function matrixSpiral(number: number) {
    //slow
    // const matrix = Array(number).fill().map(() => []);
    //fast
    const matrix = [];
    for(let i=0; i < number; i++){
        matrix[i] = [];
    }
    console.log(matrix)

    let startRow = 0;
    let endRow = number-1;
    let startCol = 0;
    let endCol = number-1;
    let count = 1;
    while(startRow <= endRow && startCol <= endCol){
        //top row
        for(let i=startCol; i<=endCol; i++){
            matrix[startRow][i] = count;
            count++
        }
        startRow++
        //end column
        for(let i=startRow; i<=endRow; i++){
            matrix[i][endCol] = count;
            count++
        }
        endCol--
        //bottom row
        for(let i=endCol; i>=startCol; i--){
            matrix[endRow][i] = count;
            count++
        }
        endRow--
        //start col
        for(let i=endRow; i>=startRow; i--){
            matrix[i][startCol] = count;
            count++
        }
        startCol++
    }
    return matrix
}

console.log(matrixSpiral(4))

