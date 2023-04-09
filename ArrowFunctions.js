var circleAreaJS = function circleArea(l) {
  var PI = 3.14;
  var area = PI * l * l;
  return area;
};

console.log(circleAreaJS(5));

//ARROW FUNCTION
const circleArea2 = (l) => {
  const PI = 3.14;
  const area = PI * l * l;
  return area;
};

console.log(circleArea2(5));

const circleArea3 = (l) => 3.14 * l * l;
console.log(circleArea3(5));

const hello = () => console.log("Hello World!!!");
hello();
