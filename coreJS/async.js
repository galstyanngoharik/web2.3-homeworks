//1
// function getUser() {
//   fetch('/api/user')
//     .then(response => response.json())
//     .then(data => console.log('User:', data));
// }

// async function getuser() {
//   try {
//     const response = await fetch('/api/user');
// const data = await response.json();
// console.log("user: ", data);
//   } catch(error) {
// console.log("error: ", error);
//   } 
// }
// function getSettings() {
//   fetch('/api/settings')
//     .then(res => res.json())
//     .catch(error => console.log('An error occurred:', error));
// }

// async function getsettings() {
//     try {
//     const res = await fetch('/api/settings');
//         const data =  await res.json()
//             return data;
//         } catch(error) {console.log('An error occurred:', error);
//     }
// }
// function loadData() {
//   fetch('/api/user')
//     .then(res => res.json())
//     .then(user => {
//       return fetch(`/api/posts/${user.id}`);
//     })
//     .then(res => res.json())
//     .then(posts => console.log('Posts:', posts));
// }
// async function loaddata() {
//     try {
//         const res = await fetch('/api/user');
//         const user = await res.json();
//       const postres = await fetch(`/api/posts/${user.id}`);
//         const posts = postres.json();
//         console.log("posts: ", posts);
//         } catch(error) {console.log('An error occurred:', error);
//     } 
// }
// async function showData() {
//   let response = fetch('/api/data');
//   let data = await response.json(); 
//   console.log(data);
// }
// function showdata() {
//     fetch('/api/data')
//     .then(response => response.json())
//     .then(data => console.log("data", data)); 
// }

// async function loadProfile() {
//   let user = await fetch('/api/profile');
//   console.log('Profile loaded', user);
// }

// function sayHello() {
//   return "Hello";
// }
// // Test: sayHello().then(console.log)

// function getPlayerScore(playerId) {
//   return fetch(`/api/players/${playerId}`)
//     .then(response => response.json())
//     .then(player => {
//       return fetch(`/api/scores/${player.gameId}`);
//     })
//     .then(response => response.json())
//     .then(score => {
//       console.log(`Current score: ${score.points}`);
//     });
// }

// async function getpl() {
//     try {
//         const response = await fetch(`/api/players/${playerId}`);
//         const player = await response.json();
//       const scores = await fetch(`/api/scores/${player.gameId}`);
//         const score = await scores.json();
//         console.log(`curent score: `, score.points);
//     } catch(error) { console.log("error: ", error); }
// }
// const obj1 = {
//    age: 80,
//    foo() {
//       return this.age;
//    }
// }
// const obj2 = {
//    __proto__: obj1,
//    age: 50,
//    foo() {
//       return super.foo();
//    }
// }
// const obj3 = {
//    __proto__: obj2,
//    age: 25,
//    foo() {
//       return super.foo();
//    }
// }
// console.log(obj3.foo());
// var x = 100

// let o = {
//   x:42, 
//   fn: () => {
//      console.log(this.x)
//   }
// }


// function* traffic() {
//     console.log("green");
//     yield
// }

// console.log(Object.prototype.__proto__ === null)
// function Person(name) {
//   this.name = name;
// }

// console.log(Person.prototype);
// console.log("1");
// setTimeout(() => {
// console.log("2");
// Promise.resolve().then(() => {
// console.log("3");
// });
// setTimeout(() => {
// console.log("4");
// }, 0);
// }, 0);
// Promise.resolve().then(() => {
// console.log("5");
// setTimeout(() => {
// console.log("6");
// }, 0);
// return Promise.resolve();
// }).then(() => {
// console.log("7");
// });
// console.log("8");
// setTimeout(() => {
// console.log("9");
// Promise.resolve().then(() => {
// console.log("10");
// });
// }, 0);
// console.log('Initialize');

// async function fetchUser() {
//  console.log('fetchUser started');

//  await new Promise(resolve => {
//    console.log('Database query executing');
//    setTimeout(() => {
//      console.log('Database response received');
//      resolve();
//    }, 0);
//  });

//  console.log('fetchUser completed');
//  return { id: 1, name: 'John' };
// }

// async function processUser() {
//  console.log('processUser started');

//  const user = await fetchUser();
//  console.log('User processed:', user.name);

//  queueMicrotask(() => {
//    console.log('Logging user activity');
//  });

//  return 'User processing finished';
// }

// setTimeout(() => {
// console.log('Background task executed');
// }, 0);

// processUser().then(status => {
//  console.log('Operation status:', status);
// });

// Promise.resolve().then(() => {
//  console.log('Cache updated');
// });

// console.log('System ready');

// console.log('1');

// setTimeout(() => console.log('2'), 0);

// Promise.resolve()
//   .then(() => {
//     console.log('3');
//     setTimeout(() => console.log('4'), 0);
//     return Promise.resolve('5');
//   })
//   .then(val => console.log(val));

// async function fetchData() {
//   console.log('6');
  
//   await new Promise(resolve => {
//     setTimeout(() => {
//       console.log('7');
//       resolve();
//     }, 0);
//   });
  
//   console.log('8');
  
//   await Promise.resolve().then(() => console.log('9'));
  
//   console.log('10');
// }

// async function main() {
//   console.log('11');
  
//   const p1 = fetchData();
  
//   await Promise.resolve().then(() => console.log('12'));
  
//   console.log('13');
  
//   await p1;
  
//   console.log('14');
  
//   queueMicrotask(() => console.log('15'));
  
//   console.log('16');
// }

// setTimeout(() => {
//   console.log('17');
//   Promise.resolve().then(() => console.log('18'));
// }, 0);

// main().then(() => console.log('19'));

// Promise.resolve()
//   .then(() => console.log('20'))
//   .then(() => console.log('21'));

// console.log('22');


// console.log('Start');

// setTimeout(() => {
//     console.log('Timeout 1');
//     setTimeout(() => {
//         console.log('Nested Timeout 1');
//         Promise.resolve().then(() => console.log('Promise in Nested Timeout 1'));
//     }, 0);
    
//     queueMicrotask(() => {
//         console.log('queueMicrotask in Timeout 1');
//         setTimeout(() => console.log('Timeout in queueMicrotask'), 0);
//     });
// }, 0);

// Promise.resolve().then(() => {
//     console.log('Promise 1');
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Promise with setTimeout');
//             resolve();
//         }, 0);
//     });
// }).then(() => {
//     console.log('Promise 2');
//     queueMicrotask(() => console.log('queueMicrotask in Promise chain'));
// });

// setTimeout(() => {
//     console.log('Timeout 2');
// }, 0);

// console.log('End');
// let obj = {
//     print: function() {console.log(this)}
// }
// let fb = obj.print
// fb()
function* isprimegen(start, end) {
    while(start <= end) {
    if(isprime(start)) { yield start;} start++
}
}
function isprime(n) {
 for(let i = 2; i < Math.sqrt(n); i++) {
    if(n % i === 0) { return false; }
 }
    return true;
    
}
const gen = isprimegen(3, 11);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

