/*
//1
function sum(num1, num2, num3) { return num1 + num2 + num3; }
let arr = [10, 20, 30];
console.log(sum.apply(0, arr)); //60

//2
const student1 = { name: "Anna", score: 80 };
const student2 = { name: "Mark", score: 95 };

function printResult() {
 console.log(this.name + " scored " + this.score);
}
printResult.call(student1); //Anna scored 80
printResult.apply(student2); //Mark scored 95

//3
const user = {
  name: "Alex",
  greet() {
    return "Hello " + this.name;
  }
};

const admin = {
  name: "Admin"
};
console.log(user.greet.call(admin)); //Hello Admin

//4
const numbers = [5, 12, 8, 20, 3];
console.log(Math.max.apply(null, numbers)); //20

//5
const obj1 = {
 value: 10,
 getValue() {
   return this.value;
 }
};

const obj2 = {
 value: 50
};

console.log(obj1.getValue.call(obj2)); //50

//6
function total(a, b, c) {
 return a + b + c;
}
const args = [7, 8, 9];
console.log(total.apply(null, args)); //24

//7
function show() {
return this.name;
}

const obj = { name: "Test" };
const bound = show.bind(obj);

console.log(bound.call({ name: "Wrong" })); //test

//8
function results() {
return `${this.name} has ${this.points} points`;
}

const p1 = { name: "Anna", points: 10 };
const p2 = { name: "Mark", points: 25 };
console.log(results.call(p1));
console.log(results.call(p2));

//9
function sum(a, b, c) {
  return a + b + c;
}

function execute(fn, arr) {
  return fn(...arr);
}

console.log(execute(sum, [2, 4, 6])); // 12

//10
function show() {
 return this.name;
}

const a = { name: "A" };
const b = { name: "B" };
const fn = show.bind(a);

console.log(fn.call(b)); //A

//11
const obj = {
 value: 100,
 get() {
   function inner() {
     return this.value;
   }
   return inner.call(this);
 }
};

console.log(obj.get()); //100
*/
//12
const obj = {
  value: 1,
  add(x) {
    this.value += x;
    return this;
  }
};
console.log(obj.add(5).add(10).value); //16




