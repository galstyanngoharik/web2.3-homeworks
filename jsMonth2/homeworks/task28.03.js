////Library homework////

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
    };
getInfo() {
    return `${this.title} by ${this.author}, ${this.year}`;
}
borrowBook() {
    if(this.isAvailable) { this.isAvailable = false; }
    else { return `book is already unavailable`};
}
returnBook() {
    if(!this.isAvailable) { this.isAvailable = true; }
    else { return `book is already available`};
}
matchesAuthor(authorName) {
    return this.author.toLowerCase() === authorName.toLowerCase();
}
matchesTitle(word) {
    return this.title.toLowerCase().includes(word.toLowerCase());
}
    }

class Library {
constructor() {
this.books = [];
};
addBook(book) {
     this.books.push(book);
}
removeBook(title) {
for(let i = 0; i < this.books.length; ++i) {
    if(this.books[i].title === title) {
        this.books.splice(i, 1);
    }
}
    }
findBookByTitle(title) {
    return this.books.find(book => book.title === title) || null;
}
findBooksByAuthor(authorname) {
    return this.books.filter(book => book.author === authorname);
}
getAvailableBooks() {
return this.books.filter(book => book.isAvailable);
}
borrowBook(title) {
    const book = this.books.find(book => book.title === title);
        if(book) { book.borrowBook(); }
    else { return `book is not found` };
}
returnBook(title) {
    const book = this.books.find(book => book.title === title);
        if(book) { book.returnBook(); }
    else { return `book is not found` };
}
showAllBooks() {
    return this.books.forEach(book => console.log(book.getInfo()));
}
countBooks() {
    return this.books.length;
}
countAvailableBooks() {
return this.getAvailableBooks().length;
}
searchBooks(word) {
    return this.books.filter(book => book.matchesTitle(word));
}
getOldestBook() {
    if(this.books.length === 0) { return null; }
return this.books.reduce((book, oldestbook) => book.year < oldestbook.year ? book : oldestbook); 
}
    }

const book1 = new Book("The idiot", "Fyodor Dostoevskiy", 1869);
const book2 = new Book("The picture of Dorian Gray", "Oscar Wilde", 1890);
const book3 = new Book("Hermann Hesse", "Demian", 1919);
const book4 = new Book("Mein Kampf", "Adolf Hitler", 1925);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

//test//
console.log("=== All books ===");
library.showAllBooks();

console.log("=== Count books ===");
console.log(library.countBooks()); 

console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); 

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
library.borrowBook("1984");

console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); 

console.log("=== Final books ===");
library.showAllBooks();
