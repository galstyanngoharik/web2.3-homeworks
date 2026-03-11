//task1
/*
let person1 = { name1 : "Ani", age1 : 20};
let person2 = { name2 : "Max", age2 : 21};
let mergedPerson = {};
Object.assign(mergedPerson, person1, person2);
console.log(mergedPerson);
*/
//task2
/*
let student = {name : "Ani", age : 19};
Object.freeze(student);
student.name = "Aram";
console.log(student);
*/
//task3
/*
let obj = {city : "Rome", country : "Italy"};
let x = null;
if(x) {
    obj.food = "pizza";
}
    console.log(obj);
*/
//task4
/*
let arr = ["ani", "gor", "anna"];
let obj = {};
for(let n of arr) {
obj[n] = "name";
}
console.log(obj);
*/
//task5
/*
let obj = new Object();
obj[0] = 2;
obj[1] = 3;
obj["hello"] = 4;

for (let i of Object.keys(obj)) {
    console.log(i, obj[i]);
}
    */
   //task6
   /*
   let obj = {name : "Ani", age : 18};
   let filteredobj = Object.entries(obj).filter(([key, value]) => typeof value === "string");
   let newobj = Object.fromEntries(filteredobj);
   console.log(newobj);
   */
  //task7
  function isEqual(obj1, obj2) {
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);
if(key1.length !== key2.length) { return false; }
return key1.every(key => obj1[key] === obj2[key]);
  }     
  let res = isEqual({1 : "a", 2 : "b"}, {1 : "a", 2 : "b"});
  console.log(res); // true
