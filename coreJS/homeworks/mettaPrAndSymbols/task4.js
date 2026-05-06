let Account = {
    balance : 1000,
    currency : "amd",
    [Symbol.toPrimitive](hint) {
        if(hint === "number" || hint === 'default') { return this.balance; }
        if(hint === "string") { return "Account balance : " + this.balance + " " + this.currency; } 
    }
};
console.log(String(Account));
console.log(+Account);
console.log(Account + 500);


