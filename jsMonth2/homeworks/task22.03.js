/*
Function.prototype.myCall = function(thisArgs, ...args) {
let sym = Symbol(42); //uniq key
thisArgs[sym] = this; // add function in object
let res = thisArgs[sym](...args); //function call
delete thisArgs[sym]; //remove te temporary property
return res; //return the result of the function call
}

const user = { name: "Ani" };
function foo() { //1
    return this.name; 
}
function person(age) { //2
return `her name is ${this.name}, she is a ${age} years old`;
}

function showInfo(city, country) { //3
 return `${this.name} lives in ${city}, ${country}`;
}

console.log(person.myCall(user, 18));
console.log(showInfo.myCall(user, "Yerevan", "Armenia"));
console.log(foo.myCall(user));
*/
/*
Function.prototype.myApply = function(thisArgs, args = []) {
let sym = Symbol(42); 
thisArgs[sym] = this;
const res = thisArgs[sym](...args);
delete thisArgs[sym];
return res;
}
const user = { name: "Joe Doe" };

function foo() { //1
    return this.name; 
}
    function person(age) { //2
return `his name is ${this.name}, he is a ${age} years old`;
}
function showInfo(city, country) { //3
 return `${this.name} lives in ${city}, ${country}`;
}


console.log(person.myApply(user, [100]));
console.log(showInfo.myApply(user, ["New-York", " USA"]));
console.log(foo.myApply(user));

    // myCall collects separate arguments: (thisArgs, ...args)
// myApply receives array directly: (thisArgs, args)
*/



Function.prototype.myBind = function(thisArgs, ...args) {
let sym = Symbol(18);
thisArgs[sym] = this; //bind context
function res(...moreArgs) {
    let res1 = thisArgs[sym](...args, ...moreArgs); //combine arguments
return res1; //return original result
delete thisArgs[sym];
}
return res; //return a new function

}
const random = { brand: "CHANEL" };
const user = { name: "Alexandra" };

function showInfo(city, country) { //1 
 return `${this.name} lives in ${city}, ${country}`;
}

function foo() { //2
    return random.brand;
}
function person(age) { //3
return `her name is ${this.name}, she is a ${age} years old`;
}
const personInfo = person.myBind(user, 10);
console.log(personInfo());
const brandName = foo.myBind(random);
console.log(brandName());
const boundShowInfo = showInfo.myBind(user, "New York");
console.log(boundShowInfo("USA"));


// myBind:  returns new function, (thisArgs, ...args) + (...moreArgs) later



