var num = 0;
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log("num == 1 : " + (num == 1)); //RETURNS FALSE
console.log("num === 1 : " + (num === 1)); //RETURNS FALSE
console.log("num != 1 : " + (num != 1)); //RETURNS TRUE
console.log("num > 1 : " + (num > 1)); //RETURNS FALSE
console.log("num < 1 : " + (num < 1)); //RETURNS TRUE
console.log("num >= 1 : " + (num >= 1)); //RETURNS FALSE
console.log("num <= 1 : " + (num <= 1)); //RETURNS TRUE
console.log("true && false: " + (true && false)); //RETURNS FALSE
console.log("true || false: " + (true || false)); //RETURNS TRUE
console.log("!true : " + !true); //RETURNS FALSE
console.log("5 & 1: ", 5 & 1); // RETURNS 1
console.log("5 | 1: ", 5 | 1); //RETURNS 5
console.log("~5: ", ~5); //RETURNS -6
console.log("5 ^ 1: ", 5 ^ 1); //RETURNS 4
console.log("5 >> 1: ", 5 >> 1); //RETURNS 2
console.log("5 << 1: ", 5 << 1); //RETURNS 10
console.log("typeof num: ", typeof num); //RETURNS NUMBER
console.log("typeof Packt: ", typeof "Packt"); //RETURNS STRING
console.log("typeof true: ", typeof true); //RETURNS BOOLEAN
console.log("typeof [1,2,3]: ", typeof [1, 2, 3]); //RETURNS OBJECT
console.log("typeof {name: Jhon}: ", typeof { name: "Jhon" }); //RETURNS OBJECT
