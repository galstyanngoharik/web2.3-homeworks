export class DynamicArray {
    #size;
    #capacity;
    #arr;
    constructor(initialCap=8) {
        if(!Number.isInteger(initialCap)) { throw new Error("capacity must be integer"); }
        if(initialCap <= 0) { throw new Error("capacity must be pozitive number"); }
        this.#size = 0;
        this.#capacity = initialCap; 
        this.#arr = new Int32Array(initialCap);  
        this.CAP_EXPONENT = 2;
    }
    set(index, value) {
        if(index < 0 || index >= this.#capacity) { throw new Error("Index out of bounds"); }
        this.#arr[index] = value;
        if (index >= this.#size) { this.#size = index + 1; } 
    }
    resize(newcap, fill=0) {
        let newarr = new Int32Array(newcap).fill(fill);
        for(let i = 0; i < this.#size; ++i) {
            newarr[i] = this.#arr[i];
        }
        this.#arr = newarr;
        this.#capacity = newcap;
    }
    pushBack(elem) {
        if(this.#size === this.#capacity) {
        this.resize(this.#capacity * this.CAP_EXPONENT); 
    }
        this.#arr[this.#size++] = elem;
    }
    popBack() {
        this.#size = this.#size-1;
    }
    capacity() { return this.#capacity; }
    set size(value) {
        if(!Number.isInteger(value)) { throw new Error("value must be integer"); }
        if(value < 0) { throw new Error("value must be pozitive number"); }
        this.#size = value;
    }
    erase(index) {
        if (!Number.isInteger(index)) throw new Error("Index must be an integer.");
        if (index < 0 || index >= this.#size) throw new Error("Index Error: Out of range.");
        for(let i = index; i < this.#size-1; ++i) {
            this.#arr[i] = this.#arr[i+1];
        }
        --this.#size;        
    }
    at(index) {
        if(index < 0 || index >= this.#capacity) { throw new Error("invalid index"); }
        return this.#arr[index];
    }
    empty() { return this.#size === 0; }
    clear() { this.#size = 0; }
    front() { return this.#arr[0]; }
    back() { return this.#arr[this.#size-1]; }
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                if(i >= this.#size) {
                    return {value: undefined, done: true};
                }
                return {value: this.#arr[i++], done: false};
            }
        };
    }
    reserve(n) {
        if(n > this.#capacity) { this.resize(n); }
    }
    shrinkToFit() {
        this.resize(this.#size);
    }
    toArray() {
       let newarr = [];
        for(let i = 0; i < this.#size; ++i) {
            newarr[i] = this.#arr[i];
        }
        return newarr;
    }
    insert(pos, value) {
        if (!Number.isInteger(pos)) throw new Error("Index must be an integer.");
        if (pos < 0 || pos >= this.#size) throw new Error("Index Error: Out of range.");
        if (!Number.isInteger(value)) throw new Error("Value must be an integer.");
        if(this.#size === this.#capacity) {
            this.resize(this.#capacity * this.CAP_EXPONENT);
        }
        for(let i = this.#size; i >= pos; i--) {
            this.#arr[i] = this.#arr[i-1];
        }
    this.#arr[pos] = value;
    ++this.#size;
    }
    swap(i=0, j=i+1) {
        this.at(i);
        this.at(j);
        [this.#arr[i], this.#arr[j]] = [this.#arr[j], this.#arr[i]];
    }
    *values() {
        for(let i = 0; i < this.#size; ++i) {
            yield this.#arr[i];
        }
    }
    *keys() {
        for(let i = 0; i < this.#size; ++i) {
            yield i;
        }
    }
    *entries() {
        for(let i = 0; i < this.#size; ++i) {
            yield [i, this.#arr[i]];
        }
    }
    forEach(cb, thisarg) {
        if(typeof(cb) !== "function") { throw new Error("cb must be function"); }
            for(let i = 0; i < this.#size; ++i) {
                cb.call(thisarg, this.#arr[i], i, this);
            }
    }
    map(cb, thisarg) {
        if(typeof(cb) !== "function") { throw new Error("cb must be function"); }
        let newarr = [];
            for(let i = 0; i < this.#size; ++i) {
                newarr[i] = cb.call(thisarg, this.#arr[i], i, this);
            }
        return newarr;
    }
    filter(cb, thisarg) {
        if(typeof(cb) !== "function") { throw new Error("cb must be function"); }
        let newarr = [];
        let count = 0;
            for(let i = 0; i < this.#size; ++i) {
                if(cb.call(thisarg, this.#arr[i], i, this)) {
                    newarr[count++] = this.#arr[i];
                }
            }
            return newarr;
    }
    reduce(cb, initialval) {
        if(typeof(cb) !== "function") { throw new Error("cb must be function"); }
            for(let i = 0; i < this.#size; ++i) {
                initialval = cb(initialval, this.#arr[i], i, this);
            }
            return initialval;
    }
    some(cb, thisarg) {
        if(typeof(cb) !== "function") { throw new Error("cb must be function"); }
        for(let i = 0; i < this.#size; ++i) {
            if(cb.call(thisarg, this.#arr[i], i, this)) {
                return true;
            }
        }
        return false;
    }
    every(cb, thisarg) {
        if(typeof(cb) !== "function") { throw new Error("cb must be function"); }
        for(let i = 0; i < this.#size; ++i) {
            if(!cb.call(thisarg, this.#arr[i], i, this)) {
                return false;
            }
        }
        return true;
    }
    find(cb, thisarg) {
        if(typeof(cb) !== "function") { throw new Error("cb must be function"); }
        for(let i = 0; i < this.#size; ++i) {
            if(cb.call(thisarg, this.#arr[i], i, this)) {
                return this.#arr[i];
            }
        }
        return undefined;
    }
    findIdx(cb, thisarg) {
        if(typeof(cb) !== "function") { throw new Error("cb must be function"); }
        for(let i = 0; i < this.#size; ++i) {
            if(cb.call(thisarg, this.#arr[i], i, this)) {
                return i;
            }
        }
        return -1;
    }
    includes(value) {
        for(let i = 0; i < this.#size; ++i) {
            if(this.#arr[i] === value) {
                return true;
            }
        }
        return false;
    }
}

const arr = new DynamicArray(4);

arr.pushBack(10);
arr.pushBack(20);
arr.pushBack(30);

arr.insert(1, 15);

// console.log(arr.toArray());
// // [10, 15, 20, 30]

// arr.swap(0, 3);

// console.log(arr.toArray());
// // [30, 15, 20, 10]
