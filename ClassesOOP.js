//IN THE LAST SECTION ABOUT OOP WE DECLARED A CLASS LIKE THIS:
/*
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

Book.prototype.printTitle = function () {
  console.log(this.title);
};
*/
//The right way to declare a class (ES2015 forward):

class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }
  printIsbn() {
    console.log(this.isbn);
  }
}

const book = new Book("JavaScript", 420, 1000);
console.log(book); //OUTPUT Book { title: 'JavaScript', pages: 420, isbn: 1000 }
console.log(book.title); //Output just the title
book.title = "new title"; //Update title on Class Book
console.log(book.title); //Output "new title"
