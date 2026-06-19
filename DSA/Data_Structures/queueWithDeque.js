import { Deque } from "./deque.js"
class Queue {
  #data;

  constructor(initialCapacity=16) {
    this.#data = new Deque(initialCapacity);
  }

  enqueue(value) {
    return this.#data.push_back(value);
  }

  dequeue() {
    this.#data.pop_front();
  }

  front() {
    return this.#data.front();
  }

  back() {
    return this.#data.back();
  }

  size() {
    return this.#data.size();  
  }

  isEmpty() {
    return this.#data.isEmpty();
  }

  clear() {
    return this.#data.clear();
  }

  toArray() {
    return this.#data.toArray()
  }

  [Symbol.iterator]() { return this.#data[Symbol.iterator](); }
}

let queue = new Queue(4);

queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.size())
console.log(queue.toArray());
console.log(queue.front())
console.log(queue.back())
