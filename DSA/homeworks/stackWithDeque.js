import { Deque } from "./deque.js"

class Stack {
  #data;
  
  constructor(initialCapacity=16) {
    this.#data = new Deque(initialCapacity);
  }

  push(value) {
    this.#data.push_back(value);
  }

  pop() {
    return this.#data.pop_back();
  }

  peek() {
    return this.#data.back();
  }

  size() { return this.#data.size(); }

  isEmpty() { return this.#data.isEmpty() };

  clear() { return this.#data.clear(); }

  toArray() { return this.#data.toArray(); }

  [Symbol.iterator]() {
    return this.#data[Symbol.iterator]();
  }
}

let stack = new Stack(4);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.toArray());
console.log(stack.peek()); 
console.log(stack.size()); 

