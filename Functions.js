function sayHello() {
  console.log("Hello JavaScript World!!!");
}

sayHello();

//Using Arguments

function outputText(text) {
  console.log(text);
}

outputText("Text example");
outputText(
  "Text example",
  "is possible to use many arguments!!!",
  "a",
  "b",
  "c",
  "d",
  "e",
  "..."
);

//Returning a value
function sumNumbers(number1, number2) {
  return number1 + number2;
}

var result = sumNumbers(9, 9);

outputText(result);
