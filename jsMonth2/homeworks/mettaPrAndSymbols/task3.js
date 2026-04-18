class OddValidator {
static [Symbol.hasInstance](instance) {
    if(typeof instance !== "number") { return false; }
        if(instance % 2 != 0) { return true; }
            else { return false; }
        }
}
console.log(5 instanceof OddValidator);
console.log(10 instanceof OddValidator);
console.log("7" instanceof OddValidator);
