//task1
setTimeout(() => {console.log("hello after 2 seconds")}, 2000);

//task2
function countdown(n) {
    for(let i = n; i >= 0; i--) {
        setTimeout(() => {
            i === 0 ? console.log("Go!") : console.log(i)
        }, (n - i)*1000);
    } 
} 
countdown(5);

//task3
const message = setTimeout(() => { console.log("Executed") }, 5000);
    setTimeout(() => { clearTimeout(message) }, 2000);

//task4
function recursia(n) {
     console.log(n);
    setTimeout(() => {recursia(n+1)}, 1000)
}
recursia(1);

