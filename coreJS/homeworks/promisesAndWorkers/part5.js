//task15
function yellow() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("yellow");
            resolve();
        }, 1000)
    });
}

function green() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("green");
            resolve();
        }, 2000)
    });
}

function red() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("red");
            resolve();
        }, 3000)
    });
}

function light() {
    return green()
    .then(() => yellow())
    .then(() => red())
}
console.log(light());
//task16
function* evenNumbers() {
    let count = 0;
    while(true) {
        if(count % 2 === 0) {
            yield count;
        }
        count++;
    }
}
