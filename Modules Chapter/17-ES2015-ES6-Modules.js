import { circleArea, squareArea } from "./17-CalcArea";

console.log(circleArea(2));
console.log(squareArea(2));

//Is possible to import and export like this:

import { squareArea as square } from "./17-CalcArea";
export { circleArea as circle } from "./17-CalcArea";

//this way has to import like this:
import { circle } from "./17-CalcArea";

//Other way
import * as area from "./17-CalcArea";
console.log(area.circleArea(2));
console.log(area.squareArea(2));

// ({}) is used when the module has 2 or more exports
