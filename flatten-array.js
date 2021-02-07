/**
 * Problem Statement: Flat an array and return array of unique values
 */

function flatten(arr) {
  const flat = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      flat.push(...flatten(i))
    } else {
      flat.push(i);
    }
  }

  return Array.from(new Set(flat));
}
