class Queue {
  #data;
  #size;
  #cap;
  #front;
  #back;

  constructor(initialCapacity) {
    if(!Number.isInteger(initialCapacity) || initialCapacity <= 0) { throw new Error("invalid capacity"); }
    this.#cap = initialCapacity;
    this.#data = new Array(initialCapacity);
    this.#size = 0;
    this.#front = 0;
    this.#back = -1;
  };

  enqueue(value) {
    if(this.isFull()) { throw new Error("cannot push value"); }
    this.#data[++this.#back] = value;
    ++this.#size;
  }

  dequeue() {
    if(this.isEmpty()) { throw new Error("array is empty"); }
    let val = this.#data[this.#front++];
    this.#data[this.#front-1] = undefined;
    --this.#size;
    return val;
  }

  front() {
    return this.#data[this.#front];
  }

  back() {
    return this.#data[this.#back];
  }

  size() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === 0;
  }
  isFull() {
    return this.#back === this.#cap;
  }

  clear() {
    this.#data = new Array(this.#cap);
    this.#size = 0;
    this.#back = -1;
    this.#front = 0;
  }

  toArray() {
    let res = new Array(this.#size);
    let j = 0;
    for(let i = this.#front; i <= this.#back; ++i, ++j) {
        res[j] = this.#data[i];
    }
    return res;
  }

  [Symbol.iterator]() {
    let i = this.#front;
        return {
            next: () => {
                if(i > this.#back) {
                return {value: undefined, done: true}
                }
                else { 
                return {value: this.#data[i++], done: false}
                }
            }
        };
    }
}
let queue = new Queue(4);
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
//queue.enqueue(5);


console.log(queue.toArray());

