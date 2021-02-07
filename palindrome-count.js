/**
 * Problem: Find the count of all possible palindromes for an input string
 * Input: malam => Output: 2
 */
function isPalindrome(inputStr) {
  return inputStr === inputStr.split('').reverse().join('');
}

function findPalindromeCount(inputStr) {
  let palindromeCount = 0;
  // Validation
  inputStr = (inputStr || '').trim();
  if (!inputStr) {
    return palindromeCount;
  }
  for (let startingIndex = 0; startingIndex < inputStr.length - 1; startingIndex++) {
    for (let movingIndex = startingIndex + 1; movingIndex < inputStr.length; movingIndex++) {
      const partialStr = inputStr.slice(startingIndex, movingIndex + 1);
      if (isPalindrome(partialStr)) {
        palindromeCount++;
      }
    }
  }
  return palindromeCount;
}

console.log(findPalindromeCount('palaalae'));