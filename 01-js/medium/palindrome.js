/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  return true;
}

module.exports = isPalindrome;
/*
ans for this is 
*/

function isPalindrome(str) {
  // Normalize the string: convert to lowercase and remove non-alphanumeric characters
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Reverse the normalized string
  const reversedStr = normalizedStr.split('').reverse().join('');
  
  // Compare the normalized string to its reversed version
  return normalizedStr === reversedStr;
}

module.exports = isPalindrome;
