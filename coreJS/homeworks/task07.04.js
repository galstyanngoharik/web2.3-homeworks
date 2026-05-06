//Task 1: Abstract Class Simulation
class Shape {
    constructor() {
        if (new.target === Shape) {
            console.log(new.target);
        throw new Error("Cannot instantiate abstract class"); 
    }
}
    getArea() {
        throw new Error("Method not implemented");
    }
}
class Rectangle extends Shape{
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() { return  this.width * this.height; }
}
class Circle extends Shape{
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() { return 3.14 * Math.pow(radius, 2); }
}
//const shape = new Shape(); // Error: Cannot instantiate abstract class

const rect = new Rectangle(10, 5);
console.log(rect.getArea()); // 50


//Task 2: Interface Simulation
class StorageProvider {
    upload(file) {
        this.file = file;
        return `uploid ${this.file}`;
    }
download(filename) {
    this.filename = filename;
    return `download ${this.filename}`;

}
}
class LocalStorageProvider extends StorageProvider {}
class CloudStorageProvider extends StorageProvider {}

 function useStorage(provider) {
    if(typeof provider.upload !== 'function' || typeof provider.download !== 'function') {  
    throw new Error("Invalid storage provider");
    }
console.log(provider.upload("file.txt"));
console.log(provider.download("file.txt"));
 }

useStorage(new LocalStorageProvider());
// Works

useStorage({});
// Error: Invalid storage provider


//Task 3: Method Overriding and super
class Animal {
    speak() { console.log("animal make a sound"); }
}
class Dog extends Animal {
    constructor() {
    super();
    console.log("Dog barks");
    }
}

const d = new Dog();
d.speak();

// Output:
// Animal makes a sound
// Dog barks






