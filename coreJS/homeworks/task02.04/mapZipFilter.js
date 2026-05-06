//1
/*
let arr = [1, 2 ,3];
const double = arr.map(x => x * 2 );
console.log(double);

//2
let arr = ["anna", "john"];
const touppercase = arr.map(x => x.toUpperCase());
console.log(touppercase);

//3
let arr = [{name: "A", age: 10}, {name: "B", age: 15}];
const ages = arr.map(x => x.age);
console.log(ages);

//4
let arr = [2, 5, 7, 8];
const even = arr.filter(x => x % 2 === 0);
console.log(even);

//5
let users = [
  { name: "Anna", age: 10 },
  { name: "Mery", age: 18 },
  { name: "John", age: 20 }
];

const chek = users.filter(x => x.age >= 18);
console.log(chek);

//6
let words = ["hello", "hi", "barevDzez"];
const word = words.filter(x => x.length > 5);
console.log(word);

//7
let users = [
  { name: "Anna", age: 10 },
  { name: "Mery", age: 18 },
  { name: "John", age: 20 }
];

const usersName = users.filter(x => x.age >= 18).map(x => x.name);
console.log(usersName);

//8
let arr = [2, 3, 5, 8, 16];
const res = arr.filter(x => x % 2 === 0).map(x => Math.pow(x, 2));
console.log(res);

//9
let products = [
    {fruit: "banana", price: 500},
    {fruit: "apple", price: 600},
    {fruit: "kiwi", price: 1200}
];

const chek = products.filter(x => x.price > 1000);
console.log(chek);
*/
//10
let users = [
    {name: "Anna", age: 17},
    {name: "John", age: 20}
];
const adultUser = users.filter(x => x.age >= 18).map(x => `${x.name} is ${x.age} years old`);
console.log(adultUser);

