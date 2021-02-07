/**
 * Problem Statement: Rotate a matrix by 90 degree (Transpose)
 */

function rotate(matrix) {
  const output = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const val = matrix[i][j];
      output[j][matrix.length - i - 1] = val;
    }
  }
  return output;
}