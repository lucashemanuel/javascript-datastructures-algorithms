/*
------------------------------------------------------------------------
| TYPE      | RESULT                                                   |
|----------------------------------------------------------------------|
| undefined | false                                                    |
| null      | false                                                    |
| boolean   | true and false                                           |
| number    | false to +0, -0, NaN and to other cases is true          |
| string    | false to STRING that length is 0 and true to STRING >= 1 |
| object    | true                                                     |
|----------------------------------------------------------------------|
*/

function testTruthy(value) {
  return value
    ? console.log("The value is TRUE")
    : console.log("The value is FALSE");
}

testTruthy(true); //RETURNS "The value is TRUE"
testTruthy(false); //RETURNS "The value is FALSE"
testTruthy(new Boolean(false)); //RETURNS "The value is TRUE" cause OBJECT is always TRUE
testTruthy(""); //RETURNS "The value is FALSE"
testTruthy("Packt"); //RETURNS "The value is TRUE"
testTruthy(new String("")); //RETURNS "The value is TRUE" cause OBJECT is always TRUE
testTruthy(1); //RETURNS "The value is TRUE"
testTruthy(-1); //RETURNS "The value is TRUE"
testTruthy(NaN); //RETURNS "The value is FALSE"
testTruthy(new Number(1)); //RETURNS "The value is TRUE" cause OBJECT is always TRUE
testTruthy({}); //RETURNS "The value is TRUE" cause OBJECT is always TRUE

var obj = { name: "lucas" };

testTruthy(obj); //RETURNS "The value is TRUE" cause OBJECT is always TRUE
testTruthy(obj.name); //RETURNS "The value is TRUE"
testTruthy(obj.age); //RETURNS "The value is FALSE"
