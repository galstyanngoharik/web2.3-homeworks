//task5
console.log("Start");

setTimeout(() => {
 console.log("Timeout");
}, 0);

console.log("End");

/*
1.call stack - clg
2.macrotask - setTimeout
3.call stack - clg

Call stack (execute)
1. Start
2. End
3. Timeout
*/
//task6
setTimeout(() => console.log("A"), 1000);

setTimeout(() => console.log("B"), 0);

console.log("C");

/*
1.macrotask - setTimeout
2.macrotask - setTimeout
3.call Stack - clg

Call stack
1. C
2. B 
3. A
*/

//task7
function delay(message, time) {
    setTimeout(() => {console.log(message)}, time);
}
delay("hello", 3000);

