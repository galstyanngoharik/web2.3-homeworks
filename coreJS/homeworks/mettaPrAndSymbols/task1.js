let myRange = {
    from : 0,
    to : 5,
    [Symbol.iterator]() {
        let current = this.from;
        return {
            next() {
                return current <= myRange.to
                ? {value : current++, done : false}
                : {value : undefined, done : true}
            }
        }
    }
}

let myRangeRev = {
    from : 0,
    to : 5,
 
    [Symbol.iterator]() {
        let current = this.to;
        return {
            next() {
                return current >= myRangeRev.from
                ? {value : current--, done : false}
                : {value : undefined, done : true}
            }
        }
    }   
}


for (const val of myRange) {
  console.log(val);
}
let iter = myRange[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

//reverse version
for (const val of myRangeRev) {
  console.log(val);
}
let itr = myRangeRev[Symbol.iterator]();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());