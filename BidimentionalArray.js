//arrays of arrays

let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

//the code before is the same as:
averageTemp[0] = [];
averageTemp[0][0] = 72; // | X | 00 | 01 | 02 | 03 | 04 | 05 |
averageTemp[0][1] = 75; // |---|----|----|----|----|----|----|
averageTemp[0][2] = 79; // | 0 | 72 | 75 | 79 | 79 | 81 | 81 |
averageTemp[0][3] = 79; // | 1 | 81 | 79 | 75 | 75 | 73 | 73 |
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;

averageTemp[1] = [];
averageTemp[0][0] = 81;
averageTemp[0][1] = 79;
averageTemp[0][2] = 75;
averageTemp[0][3] = 75;
averageTemp[0][4] = 73;
averageTemp[0][5] = 73;

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}

printMatrix(averageTemp);
