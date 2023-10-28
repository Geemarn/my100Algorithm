function printingSteps(number: number) {
    for (let row = 0;  row < number; row++) {
        let steps = '';
        for(let column = 0;  column < number; column++) {
            if(column <= row) {
                steps += '#'
            } else {
                steps += ' '
            }
        }
        console.log(steps)
    }
}

printingSteps(5)

// function printingSteps2(number: number) {
//     if(number === )
//     for (let row = 0;  row < number; row++) {
//         let steps = '';
//         for(let column = 0;  column < number; column++) {
//             if(column <= row) {
//                 steps += '#'
//             } else {
//                 steps += ' '
//             }
//         }
//         console.log(steps)
//     }
//
// }

// printingSteps2(5)
