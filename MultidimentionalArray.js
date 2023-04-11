//Matrix 3X3
//i == line, j == column, z == deeping

const matrix3x3x3 = [];

for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
  }
  for (let z = 0; z < z; z++) {
    matrix3x3x3[i][j][z] = i + j + z;
  }
}

for (let i = 0; i < matrix3x3x3.length; i++) {
  for (let j = 0; j < matrix3x3x3.length; j++) {
    for (let z = 0; z < matrix3x3x3.length; z++) {
      console.log(matrix3x3x3[i][j][z]);
    }
  }
}
