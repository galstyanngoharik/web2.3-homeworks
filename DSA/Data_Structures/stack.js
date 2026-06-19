class Stack {
  #data;
  #size;
  #cap;

  constructor(initialCapacity=16) {
    if(!Number.isInteger(initialCapacity) || initialCapacity <= 0) { throw new Error("invalid capacity"); }
    this.#cap = initialCapacity;
    this.#data = new Array(initialCapacity);
    this.#size = 0;
  }

  push(value) {
    if(this.isFull()) { throw new Error("cannot push value"); }
    this.#data[this.#size++] = value;
  }
  isFull() {
    return this.#size === this.#cap;
  }

  pop() {
    if(this.isEmpty()) { throw new Error("array is empty"); }
    let val = this.#data[--this.#size];
    return val;
  }

  peek() {
    return this.#data[this.#size-1];
  }

  size() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === 0;
  }

  clear() {
    this.#data = new Array(this.#cap);
    this.#size = 0;
  }

  toArray() {
    let res = new Array(this.#size);
    for(let i = 0; i < this.#size; ++i) {
        res[i] = this.#data[i];
    }
    return res;
  }

  [Symbol.iterator]() {
    let i = 0;
        return {
            next: () => {
                if(i >= this.#size) {
                return {value: undefined, done: true}
                }
                else { 
                return {value: this.#data[i++], done: false}
                }
            }
        };
    }
}
let stack = new Stack(4);
stack.push(1);
stack.push(2);
stack.pop();
stack.push(4);
console.log(stack.toArray());
console.log(stack.peek()); 
