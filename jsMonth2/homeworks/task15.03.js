
function curry(cb) {
    let args = [];
return function cruied(...newargs) {
    args.push(...newargs);
    if(args.length === cb.length) {
        let res = cb(...args);
        args = [];
        return res;
    }
    return cruied;
}
}
const sum = (a,b,c) => a + b + c;
const product = (a,b,c,d) => a * b * c * d;

const sumFunc = curry(sum);
const prodFunc = curry(product);

console.log(sumFunc(1)(2, 3)); //6
console.log(sumFunc(1, 2)(3)); //6
console.log(sumFunc(1, 2, 3));   //6
console.log(prodFunc(1, 2, 3, 4));   //24
console.log(prodFunc(1)(2, 3, 4));   //24
console.log(prodFunc(1, 2)(3, 4));   //24
console.log(prodFunc(1, 2, 3)(4));   //24

function factorial(a) {
    let res = 1;
    for(let i = 2; i <= a; ++i) {
        res *= i;
    }
    return res;
}

function memoize(cb) {
    let memo = {};
    return function(n) {
    if(memo[n]) {return memo[n]; }
  return memo[n] = cb(n);
    }
}
const foo = memoize(factorial);
console.log(foo(5));


function pipe(...funcs) {
    return function(v) {
        for(let i = 0; i < funcs.length; i++) {
            v = funcs[i](v);
        }
        return v;
    }
 }


const add5 = a => a + 5;
const double = a => 2 * a;
const sub4 = a => a - 4;

const func = pipe(add5, add5, double, sub4); // 20
console.log(func(2));



function trace(cb) {
    function wrapper(...callbackargs) {
let args = callbackargs.slice(0, cb.length);
let output = cb(...args);
wrapper.history.push({args, output});
return output;
    }
    wrapper.history = [];
    return wrapper;
}

function foo(a, b) {
 return a + b;
}

const tracedFunc = trace(foo);
console.log(tracedFunc(1, 2)); //3
console.log(tracedFunc(2, 4, 6)); //6

console.log(tracedFunc.history); //[{args:[1,2], output: 3}, {args:[2,4], output:6}}]


