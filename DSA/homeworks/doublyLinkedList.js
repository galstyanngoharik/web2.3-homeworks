class Node {
    constructor(value, next=null, prev=null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    };
}
class DLL {
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
        while(curr) {
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
        return this.#tail.value;
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
        let newn = new Node(value);
        if(this.empty()) {
            this.#head = newn;
            this.#tail = newn;
            return;
        }
        this.#head.next = this.#head;
        this.#head.prev = newn;
        this.#head = newn;
    }
    pushback(value) {
        let newn = new Node(value);
        if(this.empty()) {
            this.#head = newn;
            this.#tail = newn;
            return;
        }
        this.#tail.next = newn;
        newn.prev = this.#tail;
        this.#tail = newn;
    }
    popfront() {
        if(this.empty()) { throw new Error("linked list  is empty"); }
        let el = this.#head.value;
        this.#head = this.#head.next;
        this.#head.prev = null;
        return el;
    }
    popback() {
        if(this.empty()) { throw new Error("linked list  is empty"); }
        let el = this.#tail.value;
        this.#tail = this.#tail.prev;
        this.#tail.next = null;
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
       
        while(index-- && curr) {
            curr = curr.next;
        }
        newn.next = curr;
        newn.prev = curr.prev;
        curr.prev.next = newn;
        curr.prev = newn;
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
        while(index != 1 && curr.next) {
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
        let tmp = null;
        while(curr) {
            tmp = curr.prev;
            curr.prev = curr.next;
            curr.next = tmp;
            curr = curr.prev;

        }
        tmp = this.#head;
        this.#head = this.#tail;
        this.#tail = tmp;
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
    *revIterator() {
        let curr = this.#tail;
        while(curr) {
            yield curr.value;
            curr = curr.prev;
        }
    }
}

const list = new DLL();

list.pushback(10);
list.pushback(20);
list.pushback(30);

list.insert(1, 15);
//list.erase(2);
list.reverse();
//console.log(list.find(10))
console.log(list.toArray());
for(let val of list.revIterator()) {
    console.log(val);
}
