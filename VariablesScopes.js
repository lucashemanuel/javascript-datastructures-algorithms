var myVariable = "global";
myOtherVariable = "global";

function myFunction() {
  var myVariable = "local";
  return myVariable;
}

function myOtherFunction() {
  myOtherVariable = "local";
  return myOtherVariable;
}

console.log(myVariable); //RETURNS "GLOBAL"
console.log(myFunction()); //RETURNS "LOCAL"
console.log(myOtherVariable); //RETURNS "GLOBAL"
console.log(myOtherFunction()); //RETURNS "LOCAL"
console.log(myOtherVariable); //RETURNS "LOCAL"
//THE WORD (VAR) LIMITS A VARIABLE IN A SCOPE
