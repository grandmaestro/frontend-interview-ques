/**
 * Problem Statement: find if the letters in str2 are consecutively present in str1
 */
const str1 = 'facebook';
const str2 = 'obok';
const str2Set = new Set(str2.split(''));
let hasMatch = false;

for (let i = 0; i < str1.length; i++) {
  const arrStr1 = str1.split('');
  const partials = arrStr1.splice(i, str2.length);
  if ((partials.length !== str2.length) || new Set(partials).size !== str2Set.size) {
    continue;
  } else {
    hasMatch = true;
    for (let j = 0; j < str2.length; j++) {
      if (partials.includes(str2[j])) {
        hasMatch = hasMatch && true;
      } else {
        hasMatch = false;
      }
    }
    if (hasMatch) {
      break;
    }

  }
}

console.log(hasMatch);