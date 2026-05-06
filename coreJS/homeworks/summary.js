//1.Object Deduplication (Map)//

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Anna' },
  { id: 1, name: 'John' } // duplicate
];

function getUniqueUsers(users) {
   const myMap = new Map();
   for(const user of users) {
    if(!myMap.has(user.id)) {
      myMap.set(user.id, user);
    }
   }
   return Array.from(myMap.values());
}
 console.log(getUniqueUsers(users));
// [ { id: 1, name: 'John' }, { id: 2, name: 'Anna' } ]


//2. Serialization and Deserialization (Map + JSON)//

function mapToJson(map) {
  const obj = [...map.entries()];
  return JSON.stringify(obj);
}


function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}

const myMap = new Map([['a', 1], ['b', 2]]);
const jsonStr = mapToJson(myMap);
 console.log(jsonStr); 
//'[["a",1],["b",2]]' 

const restoredMap = jsonToMap(jsonStr);
console.log(restoredMap); 
// Map(2) { 'a' => 1, 'b' => 2 }


//3.Data Grouping (Map)//

function groupByGroup(students) {
  const map = new Map();
  for(const student of students) {
    if(!map.has(student.group)) {
      map.set(student.group, []);
    }   
  map.get(student.group).push(student.name);
  }
  return map;
}

const students = [
  { name: 'John', group: 'A' },
  { name: 'Anna', group: 'B' },
  { name: 'Max', group: 'A' }
];

console.log(groupByGroup(students));
// Map(2) {
//   'A' => ['John', 'Max'],
//   'B' => ['Anna']
// }


//4."Likes" System and References (WeakMap)//

  const weakm = new WeakMap();

function addLike(post, user) {
  if(!weakm.has(post)) {
    weakm.set(post, []);
  }
 weakm.get(post).push(user);
} 

function getLikes(post) {
  if(!weakm.has(post)) {  return []; }
    return weakm.get(post);
}

let post1 = { title: 'JS is awesome' };
let post2 = { title: 'Node.js event loop' };

addLike(post1, 'John');
addLike(post1, 'Anna');


 console.log(getLikes(post1)); // ['John', 'Anna']
 console.log(getLikes(post2)); // [] 

 //5. Spam Filter (Set instead of Array)//

function filterSpam(text, badWordsArray) {
  const arr = new Set([...badWordsArray]);
  const str = text.split(" ");
  for(let i = 0; i < str.length; i++) {
    if(arr.has(str[i])) {
      str[i] = "***";
    }  
  }
  return str.join(" ");
} 
const text = "buy our new cheap product";
const badWords = ["cheap", "buy"];


console.log(filterSpam(text, badWords));
// "*** our new *** product"


//6. Math with Basic Loops (Set)//

function intersection(set1, set2) {
let res = [];
  let s1 = new Set(set1);
  let s2 = new  Set(set2);
  for(let i of s1) {
    if(s2.has(i)) {
 res.push(i);
    }
  }
  return new Set(res);
}
function difference(set1, set2) {
  let res = [];
  let s1 = new Set(set1);
  let s2 = new  Set(set2);
  for(let i of s1) {
    if(!s2.has(i)) {
 res.push(i);
    }
  }
  return new Set(res);
}
const setA = new Set(['reading', 'games', 'music']);
const setB = new Set(['games', 'sports']);

console.log(intersection(setA, setB)); 
// Set(1) { 'games' }

console.log(difference(setA, setB)); 
// Set(2) { 'reading', 'music' }


//7. "Processed" Flags for DOM Elements or Objects (WeakSet)//
let weakset = new WeakSet();

function processNotification(notif) {
  if(!weakset.has(notif)) {
 weakset.add(notif);

return `processed: ${notif.text}`;
  }
  else {
return "already processed, ignoring"
  }
}

const notif1 = { id: 1, text: 'Message 1' };
const notif2 = { id: 2, text: 'Message 2' };
console.log(processNotification(notif1)); // "Processed: Message 1"
console.log(processNotification(notif1)); // "Already processed, ignoring"
console.log(processNotification(notif2)); // "Processed: Message 2"

//8. Caching "Heavy" Operations (WeakMap)//

let weakmap = new WeakMap();
function heavyCalc(obj) {
  if(weakmap.has(obj)) {
    return weakmap.get(obj);
  }
  for(let i = 0; i < 1000000000; i++) {}
  let res = obj.value * 10;
  weakmap.set(obj, res);
  return res;
}

const dataObj = { value: 10 };

 console.log(heavyCalc(dataObj)); 
// (Script pauses for 1-2 seconds...) -> 100

console.log(heavyCalc(dataObj)); 
// (Returns instantly) -> 100

//9. Manual Control of Built-in Iterators (Map)//
const mixedMap = new Map([
  [1, 'num'],
  ['str', 'text'],
  [true, false]
]);

let iterator = mixedMap.entries();
let next = iterator.next();
while(!next.done) {
  const key = next.value[0];
  const value = next.value[1];

  if (typeof value === "string") {
    console.log([key, value]);
  }
 next = iterator.next();
}
// [1, 'num']
// ['str', 'text']

//10. Unobtrusive Statistics Collector (Proxy + WeakMap)//

let counter = new WeakMap();
function trackAccess(obj) {
  counter.set(obj, 0);
  return new Proxy(obj, {
    get(target, prop) { 
      if(prop in target) { 
        let count = counter.get(target);
        counter.set(target, count+1);
      }
          return target[prop];
    }
  });
}
const original = { a: 1, b: 2 };
const proxy = trackAccess(original);

function getStats(obj) {
return counter.get(obj) || 0;
}
console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.a);


 console.log(getStats(original)); 
// 3
