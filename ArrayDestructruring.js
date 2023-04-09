//Initialize variables in one line
let [x, y] = ["lucas", "hemanuel"];

//The code before is the same as:

/*
  let x = 'lucas'
  let y = 'hemanuel'
*/

//Change value (make swap) whitout TEMP variables
/*
  [z, y] = [y, z];
*/

//The code before is the same as:
var temp = x;
x = y;
y = temp;
//very used for sort algorithms

//property shorthand
let [f, g] = ["lucas", "gomes"];
let obj = { f, g };
console.log(obj); // RETURNS {f: 'lucas', g: 'gomes'}

//The code before is the same as:
let a = "lucas";
let b = "gomes";
var obj2 = {
  a: a,
  b: b,
};

console.log(obj2); //RETURNS {a: 'lucas', b: 'gomes'}

//SHORTHAND METHOD NAMES

const hello = {
  name: "lucas",
  printHello() {
    console.log("hello world!!!");
  },
};

console.log(hello.printHello());

//The beforecode is the same as:

var hello1 = {
  name: "lucas",
  printHello: function printHello() {
    console.log("hello");
  },
};

console.log(hello1.printHello());
