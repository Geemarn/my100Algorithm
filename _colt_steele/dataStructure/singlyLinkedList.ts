class NodeX {
  val: string;
  next: any;
  constructor(val) {
    this.val = val;
    this.next = null
  }
}
const firstNode = new NodeX('hello');
firstNode.next = new NodeX('there');
console.log(firstNode);

//A data structure that contains head, tail and a length , consist of a node, and each node has a value
// and a pointer to another node or null
class SinglyLinkedList {
  head: any;
  tail: any;
  length: number;
  constructor() {
    this.head = null; /* pointer to head */
    this.tail = null; /* pointer to tail */
    this.length = 0; /* length */
  }
  push(val: any) {
    let newNode = new NodeX(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
    return this.length++;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail =  current;
    while(current.next) {
      newTail = current;
      current = current.next
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null
    }
  }
}

const obj = new SinglyLinkedList();
obj.push('hello');
obj.push('hi');
console.log(obj);
obj.pop();
obj.pop();
console.log(obj);
