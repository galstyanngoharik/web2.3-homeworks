//////prototype homework/////
//1

function myInstanceOf(obj, Constructor) {
    if(obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return false;
    }
    if(typeof Constructor !=="function") {
        return false;
    }
    while(obj !== null) {
        if(Object.getPrototypeOf(obj) === Constructor.prototype) {
            return true;
        }
    obj = Object.getPrototypeOf(obj);
    }
    return false;
}
function Animal() {}
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog();

console.log(myInstanceOf(dog, Dog)); // true
console.log(myInstanceOf(dog, Animal)); // true
console.log(myInstanceOf(dog, Array)); // false

console.log(myInstanceOf(null, Object)); // false
console.log(myInstanceOf(123, Number)); // false
console.log(myInstanceOf("hello", String)); // false


//2
function  myNew(Constructor, ...args) {
const obj = Object.create(Constructor.prototype);
const res = Constructor.call(obj, ...args);

if(res instanceof Object) { 
    return res; 
}
else { return obj; }

}

function User(name) {

 this.name = name;
}

function Car(model) {
 this.model = model;
 return { custom: "returned object" };
}

const user = myNew(User, "Alex");
console.log(user.name); // Alex
console.log(Object.getPrototypeOf(user) === User.prototype); // true
console.log(user.constructor === User); // true

const car = myNew(Car, "BMW");
console.log(car.custom); // returned object

function Empty() {}

const obj = myNew(Empty);
console.log(Object.getPrototypeOf(obj) === Empty.prototype); // true

function Test() {
 return 123;
}

const test = myNew(Test);
console.log(Object.getPrototypeOf(test) === Test.prototype); // true


//3
function checkProperty(obj, key) {
    if(Object.prototype.hasOwnProperty.call(obj, key)) {
        return "own";
    }
    if(key in obj) {
        return "inherited";
    }
    return "not found";
}

const animal = { eats: true };
const dog = Object.create(animal);
dog.name = "Rex";

console.log(checkProperty(dog, "name")); // own
console.log(checkProperty(dog, "eats")); // inherited
console.log(checkProperty(dog, "age")); // not found

const obj = Object.create(null);
obj.value = 10;

console.log(checkProperty(obj, "value")); // own
console.log(checkProperty(obj, "toString")); // not found
console.log(checkProperty({}, "toString")); // inherited


//4
function getPrototypeMethods(obj) {
const proto = Object.getPrototypeOf(obj);
if(proto === null || proto === Object.prototype) {
    return []; 
}

return Object.getOwnPropertyNames(proto).filter(key => typeof proto[key] === "function" && key !== "constructor");
}


function User(name) {
 this.name = name;
}

User.prototype.sayHi = function () {
 return `Hi, ${this.name}`;
};

User.prototype.getName = function () {
 return this.name;
};

const user = new User("Alex");

console.log(getPrototypeMethods(user)); // ["sayHi", "getName"] 
console.log(getPrototypeMethods({ a: 1 })); // []
console.log(getPrototypeMethods([]).includes("push")); // true

const base = {
 x: 10,
 print() {
   return "hello";
 }
};

const obj = Object.create(base);

console.log(getPrototypeMethods(obj)); // ["print"]
console.log(getPrototypeMethod(Object.create(null))); // []

//5
Array.prototype.mySum = function() {
    
        if(this.length === 0) { return 0; }
    
        let res = 0;
        
    for(let i of this) {    
        if(typeof i !== "number") {
            throw new Error("element is not a number");
        }
        if(Number.isNaN(i)) {
            throw new Error("invalid element");
        }
        if (!Number.isFinite(i)) {
    throw new TypeError("Invalid element");
        }
        res += i;
    }
    return res;
} 

console.log([1, 2, 3].mySum()); // 6
console.log([10, -5, 4].mySum()); // 9
console.log([].mySum()); // 0

console.log([1, "2", 3].mySum()); // Error
console.log([1, NaN].mySum()); // Error
console.log([true, 2].mySum()); // Error




