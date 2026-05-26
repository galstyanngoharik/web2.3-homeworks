//task12
console.log("1");

setTimeout(() => {
 console.log("2");
}, 0);
Promise.resolve().then(() => {
 console.log("3");
});

console.log("4");
//1, 4, 3, 2

//task13
console.log("A");

Promise.resolve().then(() => {
 console.log("B");
});

Promise.resolve().then(() => {
 console.log("C");
});

setTimeout(() => {
 console.log("D");
}, 0);

console.log("E");
//A, E, B, C, D 

//task14
console.log("Start");

setTimeout(() => {
 console.log("Timeout 1");

 Promise.resolve().then(() => {
   console.log("Promise inside timeout");
 });
}, 0);

Promise.resolve().then(() => {
 console.log("Promise 1");
});

setTimeout(() => {
 console.log("Timeout 2");
}, 0);

console.log("End");
//Start, End, Promise1, Timeout1, Promise inside timeout, Timeout2