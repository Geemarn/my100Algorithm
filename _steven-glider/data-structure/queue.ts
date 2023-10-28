class Queue {
    data: Record<number, string>;
    length: number;
    constructor() {
        this.data = {};
        this.length = 0
    }
    default(items){
        this.length = Object.keys(items).length;
        return this.data = items
    }
    remove(){
        const lastValue = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastValue
    }
    add(item){
        if(this.length === 0) this.data[0] = item
        for(let i = this.length - 1; i >= 0; i--) {
            this.data[i+1] = this.data[i]
            if(i === 0) this.data[0] = item
        }
        this.length++;
        return this.data
    }
    peek(){
        return !!this.length && this.data[this.length - 1] ;
    }
}

const Arr = new Queue()

// console.log(Arr.default({ 0:'a', 1:'b', 2: 'c'}))
// console.log(Arr.add('new'))
console.log(Arr.add('new2'))
// console.log(Arr.add('new3'))
console.log(Arr.peek())
console.log(Arr)



