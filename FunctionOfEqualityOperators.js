/*
|----------------------------------------------------------------------|
| TYPE (X)         | TYPE (Y)         | RESULT                         |
|----------------------------------------------------------------------|
| null             | undefined        | true                           |
| undefined        | null             | true                           |
| Number           | String           | x == toNumber(y)               |
| String           | Number           | toNumber(x) == y               |
| Boolean          | Any              | toNumber(x) == y               |
| Any              | Boolean          | x == toNumber(y)               |
| String or Number | Object           | x == toPrimitive(y)            | 
| Object           | String or Number | toPrimitive(x) == y            |
|----------------------------------------------------------------------|

toNumber() works like this:
|--------------------------------------------|
| TYPE      | RESULT                         |
|--------------------------------------------|
| undefined | is NaN                         |
| null      | is +0                          |
| Boolean   | if is TRUE = 1 | if FALSE = +0 |
| Number    | is the value of the number     |
|--------------------------------------------|

toPrimitive() works like this:
|---------------------------------------------------------|
| TYPE   | RESULT                                         |  
|---------------------------------------------------------| 
|        | if valueOf gives a value primitive this value  |
|        | will be returned but if toString gives a value |
| Object | primitive this value will be returned if not   |
|        | a error will be returned                       |
|---------------------------------------------------------| 
*/

//The operator == compares the type and the value

console.log("lucas" ? true : false); //RETURNS TRUE cause STRING length >= 1
console.log("lucas" == true); //RETURNS FALSE
console.log("lucas" == false); //RETURNS FALSE

/*
executing toNumber() in a String returns NaN
executing toNumber() in a Boolean returns 1 for TRUE and 0 for FALSE 
so NaN == 1 or NaN == 0 always returns FALSE
*/

//The operator === compares only the type

console.log("lucas" === true); //RETURNS FALSE
console.log("lucas" === "lucas"); //RETURNS TRUE

//About Objects the operator === compares only the reference of the Object
var person1 = { name: "Jhon" };
var person2 = { name: "Jhon" };

console.log(person1 === person2); //RETURN FALSE cause != references
