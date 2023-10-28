function pyramid(number: number) {
    let iteration = 2*(number) - 1;
    const midNumber = Math.floor(iteration/2)
    for(let row = 0; row < number; row++) {
        let pyramid = ''
        for(let col = 0; col < iteration; col++) {
            if(col >= midNumber - row  && col <= midNumber + row ){
                pyramid += '#'
            } else {
                pyramid += ' '
            }
        }
         console.log(pyramid)
    }
}

pyramid(3)
