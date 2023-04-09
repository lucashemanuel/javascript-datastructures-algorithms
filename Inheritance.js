class ITBook extends Book {
  //OOP in JavaSCript is made by prototypes
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn); //reference constructor from superclass
    this.technology = technology;
  }
  printTechnology() {
    console.log(this.technology);
  }
}

let jsBook = new ITBook("JavaScript DataStrucutures", 515, 999, "JavaScript");
console.log(jsBook.title);
console.log(jsBook.printTechnology());
