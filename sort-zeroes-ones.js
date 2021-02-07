/**
 * Problem Statement: Sort such that all 1s and then 0s in array
 */
const arr = [1, 0, 0, 0, 1, 1];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

for (let i = 0; i < arr.length; i++) {
  if (sum) {
    arr[i] = 1;
    sum--;
  } else {
    arr[i] = 0;
  }
}

console.log(arr);