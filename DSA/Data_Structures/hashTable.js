import {Node, LinkedList} from "./sllForHashtable.js";

class HashTable {
    #table;
    #capacity;
    #size;
    #loadFactor;

    constructor(capacity = 7, loadFactor = 1.0) {
        if(!Number.isInteger(capacity)) { throw new Error("capacity must be integer"); }
        if(capacity <= 0) { throw new Error("capacity must be pozitive number"); }
        if(!this.isPrime(capacity)) { capacity = this.PrimeNumber(capacity); }

        this.#size = 0;
        this.#capacity = capacity;
        this.#loadFactor = loadFactor;
        this.#table = new Array(capacity); 
        for(let i = 0; i < this.#capacity; ++i) {
            this.#table[i] = new LinkedList();
        }
    }

    size() {
        return this.#size;
    }

    capacity() {
        return this.#capacity;
    }

    isEmpty() {
        return this.#size === 0;
    }

    clear() {
       let tmp = [];
       for(let i = 0; i < this.#capacity; ++i) {
        tmp.push(new LinkedList());
       }
       this.#table = tmp;
       this.#size = 0;
    }

    #hash(key) {
        let hash = 0;
        if(typeof key === "number") {
            while(key) {
                hash += key % 10;
                key = Math.floor(key / 10);
            }
            return hash % this.#capacity;
        } else if(typeof key === "string") {
            for(let i = 0;  i < key.length; ++i) {
                hash+=key.charCodeAt(i);
            }
            return hash % this.#capacity;
        } else {
            throw new Error("key must be integer or string");
        }        
    }
    

    put(key, value) {
        if(this.loadFactor() >= this.#loadFactor) {
            this.#rehash(this.#capacity * 2);
        }
        let idx = this.#hash(key);
        let bucket = this.#table[idx];
        
        if(bucket.containsKey(key)) {
            let curr = bucket.head;
            while(curr) {
                if(curr.key === key) {
                    curr.value = value;
                    return;
                }
                curr = curr.next;
            }
        }
        let newNode = new Node(key, value);
        
        newNode.next = bucket.head;
        bucket.head = newNode;
        ++this.#size;
        ++bucket.size;
    }

    get(key) {
       let idx = this.#hash(key);
       let bucket = this.#table[idx];
       let curr = bucket.head;
        while(curr) {
            if(curr.key === key) {
                return curr.value;
            }
            curr = curr.next;
       }
       return undefined;
    }

    remove(key) {
        if(this.isEmpty()) { throw new Error("table is empty"); }
        let idx = this.#hash(key);
        let bucket = this.#table[idx];
        if(bucket.isEmpty()) { throw new Error("bucket is empty"); }
        if(!bucket.head.next) {
        let val = bucket.head.value;
        this.#size--
        bucket.size--;
        bucket.head = null;
        return val;
        }
        let curr = bucket.head;
        if(curr.key === key) {
            let val = curr.value;
            bucket.head = curr.next;
            this.#size--
            bucket.size--;
            return val;

        }
        while(curr.next) {
            if(curr.next.key === key) {
                let val = curr.next.value;
                curr.next = curr.next.next;
                this.#size--
                bucket.size--;
                return val;
            }
            curr = curr.next;
        }
        return undefined;

    }

    containsKey(key) {
        let idx = this.#hash(key);
        let bucket = this.#table[idx];
        let curr = bucket.head;
        while(curr) {
            if(curr.key === key) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    containsValue(value) {
        for(let bucket of this.#table) {
            if(!bucket.head) { continue; }
            let curr = bucket.head;
            while(curr) {
                if(curr.value === value) {
                    return true;
                }
                curr = curr.next;
            }
        }
        return false;
    }

  

    #rehash(newCapacity) {
        let oldTable = this.#table;
        this.#table = [];
        this.#capacity = newCapacity;
        this.#size = 0;

        for(let i = 0; i < newCapacity; ++i) {
            this.#table.push(new LinkedList());
        }
        for(let bucket of oldTable) {
            let curr = bucket.head;
            while(curr) {
                this.put(curr.key, curr.value);
                curr = curr.next;
            }
        }
    }

    loadFactor() {
        return this.#size / this.#capacity;
    }

    keys() {
        if(this.isEmpty()) { throw new Error("table is empty"); }
        let keys = [];
        for(let bucket of this.#table) {
            let curr = bucket.head;
            while(curr) {
                keys.push(curr.key);
                curr = curr.next;
            }
        }
        return keys;
    }

    values() {
        if(this.isEmpty()) { throw new Error("table is empty"); }
        let values = [];
        for(let bucket of this.#table) {
            let curr = bucket.head;
            while(curr) {
                values.push(curr.value);
                curr = curr.next;
            }
        }
        return values;
    }

    entries() {
        if(this.isEmpty()) { throw new Error("table is empty"); }
        let keyValue = [];
        for(let bucket of this.#table) {
            let curr = bucket.head;
            while(curr) {
                keyValue.push([curr.key, curr.value]);
                curr = curr.next;
            }
        }
        return keyValue;
    }

    *[Symbol.iterator]() {
        for(let bucket of this.#table) {
            let curr = bucket.head;
            while(curr) {
                yield [curr.key, curr.value];
                curr = curr.next;
            }
        }
    }



    bucketSizes() {
        let sizes = [];
        for(let bucket of this.#table) {
            sizes.push(bucket.size);
        }
        return sizes;
    }

    isPrime(num) {
        if(num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); ++i) {
            if(num % i === 0) { return false; }
        }
        return true;
    }

    PrimeNumber(num) {
        while(!this.isPrime(num)) {
            ++num;
        }
        return num;
    }

    print() {
        for (let i = 0; i < this.#capacity; i++) {
            let result = `Bucket ${i}: `;
            let current = this.#table[i].head;

            while (current) {
                result += `(${current.key}: ${current.value}) -> `;
                current = current.next;
            }

            result += "null";

            console.log(result);
        }
    }
}

const ht = new HashTable();

console.log("Initially empty:", ht.isEmpty());
console.log("Size:", ht.size());

ht.put("name", "John");
ht.put("age", 25);
ht.put("city", "Yerevan");

console.log("After inserts");
console.log("Size:", ht.size());

console.log("name =", ht.get("name"));
console.log("age =", ht.get("age"));
console.log("city =", ht.get("city"));

console.log("unknown =", ht.get("unknown"));

ht.put("name", "Bob");

console.log(ht.get("name"));
console.log(ht.size());