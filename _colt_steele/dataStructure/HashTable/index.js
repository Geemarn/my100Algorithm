class HashTable {
  constructor(size = 23) {
    this._keymap = new Array(size);
  }
  _hash(key) {
     let total = 0;
     let WEIRD_PRIME = 31;
     for (let i = 0; i < Math.min(key.length, 100); i++){
       let char= key[i];
       let value = char.charCodeAt(0) + 96;
       total = (total * WEIRD_PRIME + value) % this._keymap.length
     }
     return total
  }
  set (value, key) {
    let index = this._hash(key);
    if (!this._keymap[index]) {
      this._keymap[index] = [];
    };
    this._keymap[index].push([key, value])
  }

  get (key) {
    let index = this._hash(key);
    if(this._keymap[index]) {
      for(let i = 0; i < this._keymap.length; i++) {
        if (this._keymap[index][i][0] === key) {
          return this._keymap[index][i]
        }
      }
    }
  }
}

const ht = new HashTable(5);
ht.set('hello world', 'hi there');
ht.set('hello world2', 'hi there2');
ht.set('hello world3', 'hi there3');
console.log(ht);
console.log(ht.get('hi there'));
