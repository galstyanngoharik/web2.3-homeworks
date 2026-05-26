//task8
const p = new Promise((resolve, reject) => {
    resolve(setTimeout(() => {console.log("data loaded")}, 2000));
});

//task9
const pr = new Promise((resolve, reject) => {
    reject("server error");
}) 
pr.catch((error) => { console.log(error) });

//task10
function pay(balance, amount) {
    return new Promise((resolve, reject) => {
        if(amount <= balance) {
            resolve("payment successful");
        }
        else { reject("not enough money"); }
    });
}
pay(1000, 300).then((msg) => console.log(msg));

//task11
getUser()
 .then(getPosts)
 .then(getComments)





