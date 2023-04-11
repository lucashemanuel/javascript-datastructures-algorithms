//In JavaScript Array is a mutable Object
let daysOfWeek = new Array();
daysOfWeek = new Array(7);
daysOfWeek = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thirsday",
  "Friday",
  "Saturday"
);
//That is all bad ways

let daysOfWeek1 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thirsday",
  "Friday",
  "Saturday",
];

console.log(daysOfWeek1.length); //output 7

for (let index = 0; index < daysOfWeek1.length; index++) {
  console.log(daysOfWeek1[index]);
}

//Fibonacci calculus challenge

let fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 2;

for (let index = 3; index < 20; index++) {
  fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
  console.log(fibonacci.length);
}

for (let index = 1; index < fibonacci.length; index++) {
  console.log(fibonacci[index]);
}

//Adding elements to an array

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers[numbers.length] = 10; //adding one element in a final of an array
console.log(numbers); //output [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.push(11); //Array intern method of JavaScript API to add many elements in a final of an array
console.log(numbers); //output [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

numbers.push(12, 13);
console.log(numbers); //output [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]

Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

numbers.insertFirstPosition(-1); //Adding -1 to the first position of array
numbers.unshift(-2); //Intern method unshift() makes the same as "insertFirstPostion "
numbers.unshift(-4, -3);
console.log(numbers); //output [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
numbers.pop(); //remove the last index of an array

//Removing an element in the first position
for (let index = 0; index < numbers.length; index++) {
  numbers[index] = numbers[index + 1];
}

Array.prototype.reIndex = function (myArray) {
  const newArray = [];
  for (let index = 0; index < myArray.length; index++) {
    if (myArray !== undefined) {
      console.log(myArray[index]);
      newArray.push(myArray[index]);
    }
  }
  return newArray;
};

Array.prototype.removeFirstPosition = function () {
  for (let index = 0; index < this.length; index++) {
    this[index] = this[index + 1];
  }
  return this.reIndex(this);
};
numbers = numbers.removeFirstPosition();

//always use shift() method to remove the first element of an array
numbers.shift();

//Removing elements from any index of an array using splice() method
console.log(numbers); //output [ -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined, undefined ]
numbers.splice(0, 3); //Remove to 2 elements after the index 5 of an array
console.log(numbers); //output [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined, undefined ]

delete numbers[3];
numbers[3] = undefined;

//both are the same but the index will be undefined and not removed

console.log(numbers); //output [ 2, 3, 4, undefined, 6, 7, 8, 9, 10, 11, 12, undefined, undefined ]

numbers.splice(0, 0, -1, 0, 1); //inserting many numbers using splice
console.log(numbers); //output [ -1, 0, 1, 2, 3, 4, undefined, 6, 7, 8, 9, 10, 11, 12, undefined, undefined ]

numbers.splice(3, 0, 1, 2, 3); //inserting many numbers using splice
console.log(numbers); //output [ -1, 0, 1, 1, 2, 3, 2, 3, 4, undefined, 6, 7, 8, 9, 10,11, 12, undefined, undefined ]

//is possible to remove and insert that way

numbers.splice(9, 1, 5); //remove one elemente forward index 9 and add one element after index 9
console.log(numbers); //output [ -1, 0, 1, 1, 2, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined, undefined ]
