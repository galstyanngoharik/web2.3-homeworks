let digits = [1, 2, 3];
let extraNumbers = {
"0" : 4,
"1" : 5,
length : 2
};

extraNumbers[Symbol.isConcatSpreadable] = true;
console.log(digits.concat(extraNumbers));

let bonus = [4,5];
bonus[Symbol.isConcatSpreadable] = false;
console.log(digits.concat(bonus)); //output : [ 1, 2, 3, [ 4, 5, [Symbol(Symbol.isConcatSpreadable)]: false ] ]
// because isConcatSpreadable = false