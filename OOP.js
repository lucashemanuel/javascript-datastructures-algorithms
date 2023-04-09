//Creating a Class as a constructor method

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

var book = new Book("JavaScript Algorithms and DataStructures", "420", "isbn");

console.log(book.title); // RETURNS "JavaScript Algorithms and DataStructures"
book.title = "new title";
console.log(book.title); //RETURNS "new title"

//Using function/method in a Class

Book.prototype.printTitle = function () {
  console.log(this.title);
};

book.printTitle(); //RETURNS "new title"

//Declaring a function inside a Class

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function () {
    console.log(this.isbn);
  };
}
book.printIsbn(); //RETURNS "isbn"
