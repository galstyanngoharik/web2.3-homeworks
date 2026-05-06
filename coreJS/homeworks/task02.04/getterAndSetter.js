//1
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() { return `${this.firstName} ${this.lastName}`; }
}

//2
class Account {
    constructor(password) {
        this.password = password;
    }
    get password() { return this._password; }
    set password(data) {
        if(data.length > 6) { this._password = data; }
        else { console.log("password too short"); }
    }
}
let account = new Account("chlp");
console.log(account._password); //password too short, undefined

//3
class Temperature {
    constructor(celsius) {
    this.celsius = celsius;
    }
    get fahrenheit() {
    return this._celsius * (9/5) + 32;
    }
    set celsius(value) {
    this._celsius = value;
  }
}
const t = new Temperature(100);
console.log(t.fahrenheit); //212
console.log(t._celsius); // 100
 
//4
class Count {
    constructor() {
        this.count = 0;
    }
    increment() {
    this.count++;
    }
    get counter() { return this.count; }
}
let c = new Count();
c.increment();
c.increment();
c.increment();

console.log(c.counter); //3

//5
class Product {
    constructor(price) {
        this.price = price;
    }
set price(value) {
    this._price = value;
}
get newPrice() {
   return this._price * 0.9;
}
    }
let product = new Product(100);
console.log(product.newPrice); //90

//6
class BankAccount {
    constructor() {
        this._balance = 0;
    }
    get balance() {
        return this._balance;
    }
    set balance(money) {
        if(money < 0) { console.log("Negative deposit not allowed"); }
        else { this._balance += money; }
    }
}

let bankAccount = new BankAccount()
bankAccount.balance = 1000; 
bankAccount.balance = -1000; 
bankAccount.balance = 1200; 

console.log(bankAccount.balance) //Negative deposit not allowed, 2200

//7
class Rectangle {
    constructor(width, height) {
    this.width = width;
    this.height = height;
    };

set width(value) {
    this._width = value;
}
set height(value) {
    this._height = value;
}
get area() {
    return this._width * this._height;
}
    }
let rectangle = new Rectangle();
rectangle.width = 5;
rectangle.height = 2;
console.log(rectangle.area); //10

//8
class Email {
    constructor(email) {
        this.email = email;
    };
    get email() { return this._email; }
    set email(value) {
        if(value.includes("@")) {
            this._email = value;
        }
        else { console.log("invalid email"); }
    }
}
let youremail = new Email("chlp@gmail.com");
console.log(youremail.email); //chlp@gmail.com

//9
class Cart {
    constructor() {
        this._total = 0;
    }
    set total(money) {
        this._total += money;
    } 
    get total() { return this._total; }
}
let cart = new Cart();
cart.total = 20;
cart.total = 50;
console.log(cart.total); //70

//10
class Car {
    constructor(speed) {
        this.speed = speed;
    }
    get speed() { return this._speed; }
    set speed(value) {
        if(value <= 200) {
            this._speed = value;
        }
        else { console.log("Too fast"); }
    }
}

let car = new Car(300); //Too fast
console.log(car.speed);