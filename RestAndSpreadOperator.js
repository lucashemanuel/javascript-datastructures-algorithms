function sum(x, y, z) {
  return x + y + z;
}

let params = [1, 2, 3];

console.log(sum(...params)); //...params == Spread Operator

//Using Spread Operator as a Rest Operator inside a function arguments

function restParameterFunction(x, y, ...a) {
  return (x + y) * a.length;
}

console.log(restParameterFunction(1, 2, "hello", true, {}, 1)); //RETURNS 12

//The same code as diferent way

function restParameter(x, y) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
}

console.log(restParameter(1, 2, "hello", true, {}, 1)); //RETURNS 12
