//insertion, delection and access is 0(1)
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
       total = (total * WEIRD_PRIME + value) % this._keymap.length;
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
  values() {
    let valuesArr= [];
    for(let i = 0; i < this._keymap.length; i++) {
      if (this._keymap[i]) {
        for(let j = 0; j < this._keymap[i].length; j++) {
          if(!valuesArr.includes(this._keymap[i])) {
            valuesArr.push(this._keymap[i][j][1])
          }
        }
      }
    }
    return valuesArr;
  }

  keys() {
    let keysArr= [];
    for(let i = 0; i < this._keymap.length; i++) {
      if (this._keymap[i]) {
        for(let j = 0; j < this._keymap[i].length; j++) {
          if(!keysArr.includes(this._keymap[i])) {
            keysArr.push(this._keymap[i][j][0])
          }
        }
      }
    }
    return keysArr;
  }
}

const ht = new HashTable(5);
ht.set('hello world', 'hi there');
ht.set('hello world2', 'hi there2');
ht.set('hello world3', 'hi there3');
ht.set('hello world3', 'hi there3');
console.log(ht);
console.log(ht.get('hi there3'));
console.log(ht.values());
console.log(ht.keys());
