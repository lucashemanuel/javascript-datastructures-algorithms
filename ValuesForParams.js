function sum(x = 1, y = 2, z = 3) {
  return x + y + z;
}

console.log(sum(4, 2));

//BEFORE ES2015
function sum1(x, y, z) {
  if (x === undefined) x = 1;
  if (y === undefined) y = 2;
  if (z === undefined) z = 3;
  return console.log(x + y + z);
}

//functions has a implicit Object named "arguments"

function sum2() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  return console.log(x + y + z);
}
