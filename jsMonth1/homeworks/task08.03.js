//1
/*
function forEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

let arr = [1,2,3,];
let mul = 1;
forEach(arr, num => {
    mul *= num;
});
    console.log(mul);
*/
    
   //2
   /*
   function map(array, callback) {
    let newarr = [];
    for(let i = 0; i < array.length; i++) {
        newarr.push(callback(array[i], i, array));
    }
    return newarr;
   }
   let arr = [2, 4, 5];
   let newarr = map(arr, num => num + 1);
   console.log(newarr); 
        */
//3
/*
function filter(array, callback) {
    let newarr = [];
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            newarr.push(array[i]);
    }
    }
    return newarr;
}
let arr = [2,3,6];
let newarr = filter(arr, num => num % 2 == 0);
    console.log(newarr);
*/
//4
/*
function some(array, callback) {
    for(let i = 0; i < array.length; i++) {
if(callback(array[i], i, array)) {
    return true; 
}  
else { return false; }      
    }
}
let arr = [2, 3,];
let res = some(arr, num => num % 2 == 0);
console.log(res);
*/
//5
/*
function every(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(!callback(array[i], i, array)) {
            return false;
        }
    }
    return true; 
}

let arr = [1, 6, 4];
let res = every(arr, num => num % 2 == 0);
console.log(res);
*/
//6
function indexOf(array, searchElement) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] == searchElement) {
            return i;
        }
    }
     return -1;
}
let arr = [2, 3, 4];
console.log(indexOf(arr, 3)); //1