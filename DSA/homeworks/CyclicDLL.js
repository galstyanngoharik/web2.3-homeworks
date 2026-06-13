class Node {
    constructor(value, next=null, prev=null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    };
}
class cyclicDLL {
    #head;
    #tail;
    constructor(head=null, tail=null) {
        this.#head = head;
        this.#tail = tail;
    };
    empty() { return this.#head === null; }
    size() {
        if(this.empty()) { return 0; }
        if(!this.#head.next) { return 1; }
        let curr = this.#head;
        let count = 1;
        while(curr.next !== this.#head) {
            count++;
            curr = curr.next;
        }
        return count;
    }
    clear() { 
        this.#head = null; 
        this.#tail = null;
    }
    front() {
        if(this.empty()) { throw new Error("linked list  is empty"); }
        return this.#head.value;
    }
    back() {
        if(this.empty()) { throw new Error("linked list  is empty"); }
        return this.#tail.value;
    }
    at(index) {
        if(this.empty()) { throw new Error("linked list is empty"); }
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
        let newn = new Node(value);
        if(this.empty()) {
            this.#head = newn;
            this.#tail = newn;
            return;
        }
        newn.prev = this.#tail;
        this.#head.prev = newn;
        newn.next = this.#head;
        this.#head = newn;
    }
    pushback(value) {
        let newn = new Node(value);
        if(this.empty()) {
            this.#head = newn;
            this.#tail = newn;
            return;
        }
        newn.prev = this.#tail;
        this.#head.prev = newn;
        this.#tail.next = newn;
        newn.next = this.#head;
        this.#tail = newn;
    }
    popfront() {
        if(this.empty()) { throw new Error("linked list  is empty"); }
        let el = this.#head.value;
        this.#head = this.#head.next;
        this.#tail.next = this.#head;
        
        return el;
    }
    popback() {
        if(this.empty()) { throw new Error("linked list  is empty"); }
        let el = this.#tail.value;
        this.#tail = this.#tail.prev;
        this.#head.prev = this.#tail;
        this.#tail.next = this.#head;
        return el;
    }
    insert(index, value) {
        if(index >= this.size()) { throw new Error("invalid index"); }
        let newn = new Node(value);
        if(this.empty()) {
            this.#head = newn;
            this.#tail = newn;
            return;
        }
        if(index === 0) { 
            this.pushfront(value); 
            return;  
        }
        let curr = this.#head;
       
        while(index-- && curr.next !== this.#head) {
            curr = curr.next;
        }
        newn.next = curr;
        newn.prev = curr.prev;
        curr.prev.next = newn;
        curr.prev = newn;
            this.#head.prev = this.#tail;
            this.#tail.next = this.#head;
    }
    erase(index) {
        if(index >= this.size()) { throw new Error("invalid index"); }
        if(this.empty()) { throw new Error("linked list  is empty"); }
        if(!Number.isInteger(index)) throw new Error("Index is not integer");
        if(index === 0) { 
            this.popfront(); 
            return; 
        }
        let curr = this.#head;
        while(index != 1 && curr.next !== this.#head) {
            index--;
            curr = curr.next;
        }
        let removed = curr.value;
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
        arr.push(curr.value);
        curr = curr.next;
    } while (curr !== this.#head);

        return arr;
    }
    reverse() {
        if(this.empty()) { throw new Error("linked list  is empty"); }
        let curr = this.#head;
        let next = null;
        do {
            next = curr.next;
            curr.next = curr.prev;
            curr.prev = curr;
            curr = next;
            
        } while(curr !== this.#head) 
        this.#head.next = this.#tail;
        this.#head = this.#tail;
    }
    [Symbol.iterator]() {
        let curr = this.#head;
        let flag = false;
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
    *revIterator() {
        let curr = this.#tail;
        while(true) {
            yield curr.value;
            curr = curr.prev;
            if(curr === this.#tail) { break; }
        }
    }
}

const list = new cyclicDLL();
 
list.pushfront(3); 
list.pushfront(2);
list.pushback(4);
list.pushback(5);
list.pushback(6);

//list.popfront();
//list.popback();
//list.insert(1, 6)
//list.erase(3);
list.reverse();
console.log(list.toArray());
//console.log(list.contains(4));
console.log(list.size());
// console.log(list.front()); 
// console.log(list.back()); 
