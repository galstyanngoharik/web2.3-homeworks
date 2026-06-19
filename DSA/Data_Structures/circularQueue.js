import { DynamicArray } from "./dynamicArray.js"

class CircularQueue {
 #data;
 #front;
 #size;
   constructor(capacity = 8) {
      if(!Number.isInteger(capacity)) { throw new Error("capacity must be integer"); }
      if(capacity <= 0) { throw new Error("capacity must be pozitive number"); }
      this.#data = new DynamicArray(capacity);
      this.#front = 0;
      this.#size = 0;
   }

   size() {
      return this.#size;
   }

   capacity() {
      return this.#data.capacity();
   }

   isEmpty() {
      return this.#size === 0;
   }

   clear() {
      this.#data = new DynamicArray(capacity);
      this.#front = 0;
      this.#size = 0;
   }

   enqueue(value) {
      if(this.#size === this.capacity()) { this.#grow();}
      let idx = (this.#front + this.#size) % this.capacity();
      this.#data.set(idx, value);
   
      ++this.#size;
   }

   dequeue() {
      if(this.isEmpty()) { throw new Error("queue is empty"); }
      let val = this.#data.at(this.#front);
      this.#data.set(this.#front, 0);
      this.#front = (this.#front+1) % this.capacity();
      --this.#size;
      return val;
   }

   front() {
      if(this.isEmpty()) { throw new Error("queue is empty"); }
      return this.#data.at(this.#front);
   }

   back() {
      if(this.isEmpty()) { throw new Error("queue is empty"); }
      let back = (this.#front + this.#size - 1) % this.capacity();
      return this.#data.at(back);
   }

   #grow() {
      let cap = this.capacity() * 2;
      let newarr = new DynamicArray(cap)
      for(let i = 0; i < this.#size; ++i) {
         let rare = (this.#front + i) % this.#data.capacity();
         newarr.set(i, this.#data.at(rare));
      }
      this.#data = newarr;
      this.#front = 0;
   }

   toArray() {
      let res = [];
         for(let i = 0; i < this.#size; ++i) {
            let idx = (this.#front + i) % this.capacity();
            res.push(this.#data.at(idx));
         }
      return res;
   }

   toString() {
      let str = "";
      for(let i = 0; i < this.#size; ++i) {
         let idx = (this.#front + i) % this.capacity();
         str+=this.#data.at(idx);
      }
      return str;
   }

   [Symbol.iterator]() {
      let i = this.#front;
      return {
         next: () => {
            if(i >= this.#size) {
               return {value: undefined, done: true};
            }
            let idx = (this.#front + i) % this.capacity();
            i++;
            return {value: this.#data.at(idx), done: false};
         }
      };
   }
}
let queue = new CircularQueue(4);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(7);

queue.dequeue();
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();

queue.enqueue(5);
queue.dequeue();

queue.enqueue(1);
queue.enqueue(1);



console.log(queue.size())
console.log(queue.toArray());
console.log(queue.toString());
for(let val of queue) {
   console.log(val)
}
console.log(queue.front())
console.log(queue.back())
