function chunk <T> (array: Array<T>, size: number): Array<T> {
    const arr = []
    let i = 0;

    while (i < array.length) {
        arr.push(array.slice(i, i+size))
        i += size
    }
    // for (let i = 0; i < array.length; i+=size) {
    //     arr.push(array.slice(i, i+size))
    // }
    return arr
}


console.log(chunk(['a', 'b', 'c', 'd', 'e'],  2))
console.log(chunk(['a', 'b', 'c', 'd', 'e', 1, 2,3,4,9,0 ],  3))
