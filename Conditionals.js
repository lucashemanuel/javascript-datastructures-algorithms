//Simple IF
var number = 1;

if (number === 1) {
  console.log("number is equal to 1");
}

//Simple IF and ELSE
var number = 0;

if (number === 1) {
  console.log("number is equal to 1");
} else {
  console.log("number is not equal to 1, number is: ", number);
}

//Ternary Operator (condition) ? true scope : false scope
number == 1
  ? console.log("number is equal to 1")
  : console.log("number is not equal to 1, number is: ", number);

//Nested IFs and ELSEs
var month = 5;

if (month === 1) {
  console.log("January");
} else if (month === 2) {
  console.log("February");
} else if (month === 3) {
  console.log("March");
} else {
  console.log("Month is not January, February or March");
}

//SWITCH CASE CONDITIONAL
var month = 5;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
  default:
    console.log("Month is not January, February or March");
    break;
}
