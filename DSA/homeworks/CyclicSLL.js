class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    };
}

class CyclicSinglyLinkedList {
    #head;
    constructor(head=null) {
        this.#head = head;
    };
    empty() { return this.#head === null; }
    size() {
        if(!this.#head) { return 0; }
        let curr = this.#head;
        let count = 1;
        while(curr.next !== this.#head) {
            count++;
            curr = curr.next;
        }
        return count;
    }
    clear() { this.#head = null; }
    front() {
        if(this.empty()) { throw new Error("linked list is empty"); }
        return this.#head.value;
    }
    back() {
        if(this.empty()) { throw new Error("linked list is empty"); }
        if(!this.#head.next) { return this.#head.value };
        let curr = this.#head;
        while(curr.next !== this.#head) {
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
    pushFront(value) {
        if(this.empty()) {
            this.#head = new Node(value);
            this.#head.next = this.#head;
            return;
        }
        let newn = new Node(value);
        let curr = this.#head;
        while(curr.next !== this.#head) { curr = curr.next; }
        curr.next = newn;
        newn.next = this.#head;
        this.#head = newn;
    }
    pushBack(value) {
        if(this.empty()) {
            this.#head = new Node(value);
            this.#head.next = this.#head;
            return;
        }
        let curr = this.#head;
        while(curr.next !== this.#head) {
            curr = curr.next;
        }
        curr.next = new Node(value);
        curr.next.next = this.#head;
    }
    popFront() {
        if(this.empty()) { throw new Error("linked list  is empty"); }
        let el = this.#head.value;
        let curr = this.#head;
        while(curr.next !== this.#head) {
        curr = curr.next;
    }
        this.#head = this.#head.next;
        curr.next = this.#head;
        return el;
    }
    popBack() {
        if(this.empty()) { throw new Error("linked list  is empty"); }
        if (this.#head.next === this.#head) {
            let el = this.#head.value;
            this.#head = null;
            return el;
        }
        let curr = this.#head;
        while(curr.next.next !== this.#head) {
            curr = curr.next;
        }
        let el = curr.next.value;
        curr.next = this.#head;
        return el;
    }
    insert(index, value) {
         if(this.empty()) {
            this.#head = new Node(value);
            this.#head.next = this.#head;
            return;
        }
        if(index >= this.size()) { throw new Error("invalid index"); }
        if(index === 0) { 
            this.pushFront(value); 
            return; 
        }
        let curr = this.#head;
        let newn = new Node(value);
        while(--index) {
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
            this.popFront();
            return; 
        }
        let curr = this.#head;
        while(index != 1 && curr.next !== this.#head) {
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
        while(curr.next !== this.#head) {
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
        while(curr.next !== this.#head) {
            if(curr.value === value) { return true; }
            curr = curr.next;
        }
        return false;
    }
    toArray() {
        let arr = [];
        let curr = this.#head;
        do {
            arr[arr.length] = curr.value;
            curr = curr.next;
        } while(curr !== this.#head) 
        return arr;
    }
    reverse() {
        if(this.empty()) { throw new Error("linked list  is empty"); }
        let curr = this.#head;
        let next = null;
        let prev = null;
        do {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            
        } while(curr !== this.#head) 
        this.#head.next = prev;
        this.#head = prev;
    } 
    [Symbol.iterator]() {
        let curr = this.#head;   
        let flag = false
        return {
            next: () => {
                if(curr === this.#head && flag) {
                    return {value: undefined, done: true};
                }
                flag = true;
                let val = curr.value;
                curr = curr.next;
                return {value: val, done: false};
            }
        };
    }
    *entries() {
        let curr = this.#head;
        let idx = 0;
        while(curr.next !== this.#head) {
            let val = curr.value;
            yield [idx, val];
            curr = curr.next;
            idx++;
        }
        curr.next = this.#head;
    }
}
const list = new CyclicSinglyLinkedList();

list.pushBack(10);
list.pushBack(20);
list.pushBack(30);
list.pushFront(23);
list.insert(1, 15);
//console.log(list.erase(1))
list.reverse();
// let gen = list.entries();
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(list.contains(15))
console.log(list.toArray());
// for(let val of list) {console.log(val); }
//console.log(list.back());