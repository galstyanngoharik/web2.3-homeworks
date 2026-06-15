class BucketedDeque {
    #everyBucketsLength;
    #bucketSize;
    #buckets;
    #frontBucket;
    #backBucket;
    #frontIndex;
    #backIndex;
    #size;
    constructor(everyBucketsLength) {
        this.#init(everyBucketsLength);
    }

    push_front(value) {
        if(this.#frontIndex < 0) {
            this.#frontIndex = this.#everyBucketsLength-1;
            --this.#frontBucket;
            if(this.#frontBucket < 0) {
                this._ensureBucket(true);
            }
        }
        this.#buckets[this.#frontBucket][this.#frontIndex--] = value;
        this.#size++;
    }

    push_back(value) {
        if(this.#backIndex > this.#everyBucketsLength) {
            this.#backIndex = 0;
            --this.#backBucket;
            if(this.#backBucket >= this.#bucketSize) {
                this._ensureBucket(false);
            }
        }
        this.#buckets[this.#backBucket][this.#backIndex++] = value;
        this.#size++;
    }

    pop_front() {
        if(this.isEmpty()) { throw new RangeError("deque is empty"); }
        let removeEl = this.#buckets[this.#frontBucket][this.#frontIndex];
        this.size--;
        ++this.#frontIndex;
        return removeEl;
    }

    pop_back() {
        if(this.isEmpty()) { throw new RangeError("deque is empty"); }
        let removeEl = this.#buckets[this.#backBucket][this.#backIndex];
        this.#size--;
        --this.#backIndex;
        return removeEl;
    }

    front() {
        return this.#size ? this.at(0) : undefined;
    }

    back() {
        return this.#size ? this.at(this.#size-1) : undefined;
    }
    #init(everyBucketsLength) {
        this.#everyBucketsLength = everyBucketsLength ?? 8;
        this.#bucketSize = 4;
        this.#size = 0;
        this.#buckets = new Array(this.#bucketSize);
        for(let i = 0; i < this.#bucketSize; i++) {
            this.#buckets[i] = new Array(this.#everyBucketsLength).fill(null);
        }
        let mid = Math.floor(this.#bucketSize / 2);
        this.#backBucket = mid;
        this.#frontBucket = mid-1;
        this.#backIndex = 0;
        this.#frontIndex = this.#everyBucketsLength-1;
    }

    clear() {
        this.#init(this.#everyBucketsLength);
    }

    size() {
        return this.this.#size;
    }

    isEmpty() { 
        return this.#size === 0;
    }

    toArray() {
        let newarr = [];
        for(let i = 0; i < this.#size; ++i) {
            newarr.push(this.at(i));
        }
        return newarr;
    }

    at(globalIndex) {
        let {buckIdx, localIdx} = this._bucketIndex(globalIndex);
        return this.#buckets[buckIdx][localIdx];
    }
     
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                if(i >= this.#size) {
                    return {value: undefined, done: true};
                }
                return {value: this.at(i++), done: false};
            }
        };
    }
  
    _ensureBucket(front = false) {
        let newSize = this.#bucketSize * 2;
        let newBuckets = new Array(newSize); 
        if(front) {
            for(let i = 0; i < this.#bucketSize; ++i) {
                newBuckets[i] = new Array(this.#everyBucketsLength).fill(null);
            }
            for(let i = 0; i < this.#bucketSize; ++i) {
                newBuckets[i+this.#bucketSize] = this.#buckets[i];
            }
            this.#frontBucket += this.#bucketSize;
            this.#backBucket += this.#bucketSize
        } else {
            for(let i = this.#bucketSize; i < newSize; ++i) {
                newBuckets[i] = new Array(this.#everyBucketsLength).fill(null);
            }
            for(let i = 0; i < this.#bucketSize; ++i) {
                newBuckets[i] = this.#buckets[i];
            }
        }
        this.#buckets = newBuckets;
        this.#bucketSize = newSize;
    }

    _bucketIndex(globalIndex) {
        if(!Number.isInteger(globalIndex) || 
           globalIndex < 0 || globalIndex >= this.#size) {
            return undefined;
        }
        let absIdx = (this.#frontIndex+1)+globalIndex;
        let localIdx = absIdx % this.#everyBucketsLength;
        let buckIdx = this.#frontBucket + Math.floor(absIdx / this.#everyBucketsLength);
        return {buckIdx, localIdx};
    }
}

const dq = new BucketedDeque(4);
dq.push_front(0);
dq.push_front(-1);
dq.push_back(1);
dq.push_back(2);
dq.pop_back();
console.log(dq.toArray());
console.log(dq.at(1));
for(let val of dq) {
    console.log(val);
}


