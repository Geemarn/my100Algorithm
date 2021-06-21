//stack )the last item added is removed ist) O(1)
class NodeX {
  value: string | number;
  next: string | number | null;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  first: Record<string, any> | null;
  last: Record<string, any> | null;
  size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new NodeX(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size
  }

  pop() {
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value
  }
}

const stack = new Stack();


console.log(stack.push('hello world'));
console.log(stack.push('hello world2'));
console.log(stack.pop());
console.log(stack.pop());

//Queue (we add to the bottom and remove from the ist)
//the first item is the ist to be removed (FIFO)
class Queue {
  first: Record<string, any> | null;
  last: Record<string, any> | null;
  size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new NodeX(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size
  }

  dequeue() {
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value
  }
}

const queue = new Queue();


console.log(queue.enqueue('hello world'));
console.log(queue.enqueue('hello world2'));
console.log(queue.dequeue());
console.log(queue.dequeue());
