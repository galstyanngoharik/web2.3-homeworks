class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    };
}
class Sll {
    #head;
    constructor(head = null) {
        this.#head = head;
    };
    empty() { return this.#head === null; }
    size() {
        if(!this.#head) { return 0; }
        if(!this.#head.next) { return 1; }
        let curr = this.#head;
        let count = 1;
        while(curr.next) {
            count++;
            curr = curr.next;
        }
        return count;
    }
    clear() { this.#head = null; }
    front() {
        if(this.empty()) { throw new Error("linked list  is empty"); }
        return this.#head.value;
    }
    back() {
        if(this.empty()) { throw new Error("linked list  is empty"); }
        if(!this.#head.next) { return this.#head.value };
        let curr = this.#head;
        while(curr.next) {
            curr = curr.next;
        }
        return curr.value;
    }
    at(index) {
        if(this.empty()) { throw new Error("linked list  is empty"); }
        if (!Number.isInteger(index)) throw new Error("Index is not integer");
        if(index >= this.size()) { throw new Error("invalid index"); }
        let curr = this.#head;
        while(index) {
            index--;
            curr = curr.next;
        }
        return curr.value;
    }
    pushfront(value) {
        if(this.empty()) {
            this.#head = new Node(value);
            return;
        }
        let newn = new Node(value);
        newn.next = this.#head;
        this.#head = newn;
    }
    pushback(value) {
        if(this.empty()) {
            this.#head = new Node(value);
            return;
        }
         if (this.#head.next === null) {
            this.#head.next = new Node(value);
            return;
        }
        let curr = this.#head;
        while(curr.next) {
            curr = curr.next;
        }
        curr.next = new Node(value);
    }
    popfront() {
        if(this.empty()) { throw new Error("linked list  is empty"); }
        let el = this.#head.value;
        this.#head = this.#head.next;
        return el;
    }
    popback() {
        if(this.empty()) { throw new Error("linked list  is empty"); }
        if (this.#head.next === null) {
            let res = this.#head.value;
            this.#head = null;
            return res;
        }
        let curr = this.#head;
        while(curr.next.next) {
            curr = curr.next;
        }
        let res = curr.next.value;
        curr.next = null;
        return res;
    }
    insert(index, value) {
        if(index >= this.size()) { throw new Error("invalid index"); }
         if(this.empty()) {
            this.#head = new Node(value);
            return;
        }
        if(index === 0) { 
            this.pushfront(value); 
            return;  
        }
        let curr = this.#head;
        let newn = new Node(value);
        while(index != 1 && curr) {
            index--;
            curr = curr.next;
        }
        newn.next = curr.next;
        curr.next = newn;
    }
    erase(index) {
        if(index >= this.size()) { throw new Error("invalid index"); }
        if(this.empty()) { throw new Error("linked list  is empty"); }
        if (!Number.isInteger(index)) throw new Error("Index is not integer");
        if(index === 0) { 
            this.popfront(); 
            return; 
        }
        let curr = this.#head;
        while(index != 1 && curr) {
            index--;
            curr = curr.next;
        }
        let removed = curr.next.value;
        curr.next = curr.next.next;
        return removed;
    }
    find(value) {
        let curr = this.#head;
        let idx = 0;
        while(curr) {
             if(curr.value === value) {
                return idx;
            }
            idx++;
            curr = curr.next;
        }
        return -1;
    }
    contains(value) {
        let curr = this.#head;
        while(curr) {
            if(curr.value === value) { return true; }
            curr = curr.next;
        }
        return false;
    }
    toArray() {
        let arr = [];
        let curr = this.#head;
        let i = 0;
        while(curr) {
            arr[i] = curr.value;
            curr = curr.next;
            i++;
        }
        return arr;
    }
    reverse() {
        if(this.empty()) { throw new Error("linked list  is empty"); }
        let curr = this.#head;
        let next = null;
        let prev = null;
        while(curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.#head = prev;
    } 
    [Symbol.iterator]() {
        let curr = this.#head;
        
        return {
            next: () => {
                if(!curr) {
                    return {value: undefined, done: true};
                }
                let val = curr.value;
                curr = curr.next;
                return {value: val, done: false};
            }
        };
    }
    *entries() {
        let curr = this.#head;
        let idx = 0;
        while(curr) {
            let val = curr.value;
            yield [idx, val];
            curr = curr.next;
            idx++;
        }
    }
}    

const list = new Sll();

list.pushback(10);
list.pushback(20);
list.pushback(30);

list.insert(1, 15);

console.log(list.toArray());
// [10, 15, 20, 30]

list.erase(2);

console.log(list.toArray());
// [10, 15, 30]

list.reverse();
list.erase(2);

console.log(list.toArray());
// for(let val of list) {console.log(val); }

// [30, 15, 10]
