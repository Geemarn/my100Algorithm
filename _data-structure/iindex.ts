class MyArray {
    data: Record<string, any>;
    length: number;
    constructor() {
        this.data = {};
        this.length = 0
    }
    get(index){
       return this.data[index]
    }
    push(item) {
        this.data[this.length] = item
        this.length++;
        return this.length
    }
    pop() {
      delete this.data[this.length - 1];
      this.length--;
      return this.data[this.length - 1]
    }
    delete(index) {
        delete this.data[index]
        this.shiftItem(index)
        return this.data
    }
    shiftItem(index) {
        for(let i = index;  i < this.length-1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length-1]
        this.length--
    }
    shift() {
        delete this.data[0]
        this.shiftItem(0)
        return this.length
    }
    unshift(item) {
        if(this.length === 0) this.data[0] = item;
        for(let i = this.length-1;  i >= 0; i--) {
            this.data[i+1] = this.data[i]
            if(i === 0) this.data[0] = item
        }
        this.length++;
        return this.data
    }
}

const arr = new MyArray()

arr.push('a')
arr.push('b')
arr.push('c')
arr.push('d')
console.log(arr.unshift('new'))
console.log(arr.shift())
console.log('arr:::', arr)

function reverseStr(str: string) {
    const reverse = []
    if(str.length < 2) return str
    for(let i = str.length - 1; i >= 0; i--) {
        reverse.push(str[i])
    }
    return reverse.join('')
}
function reverseStr2(str: string) {
    const strArr = str.split('')
    return strArr.reverse().join('')
}
const reverseStr3 = (str: string) => [...str as any].reverse().join('')
const reverseNum = (num: number) => ([...num.toString() as any].reverse().join('') as any) * 1
console.log(reverseNum(123456))


const mergeSortedArr = (arr1: Array<string | number>, arr2: Array<string | number>) => {
    if(arr1.length === 0) return arr2;
    if(arr2.length === 0) return arr1;
    return [...arr1, ...arr2].sort()
}

const mergeSortedArr2 = (arr1: Array<number>,arr2: Array<number>) => {
    if(arr1.length === 0) return arr2;
    if(arr2.length === 0) return arr1;
    let mergeArr = [];
    let i = 1;
    let j=1;
    while(arr1[0] || arr2[0]) {
        if(arr2[0] === undefined || arr1[0] < arr2[0]) {
            mergeArr.push(arr1[0]);
            arr1[0]= arr1[i]
            i++
        } else {
            mergeArr.push(arr2[0]);
            arr2[0]= arr2[j]
            j++
        }
    }
    return mergeArr
}
console.log(mergeSortedArr2([1, 6, 7, 10], [3, 5, 7,8,20]))

const sortedArr = (arr: Array<number>) => {
    if(arr.length === 0 || arr.length === 1) return arr;
    let sortedArr = [];
    let firstArr = arr[0]
    let i = 1

    return sortedArr
}

console.log(sortedArr([1, 11, 7, 3]))
