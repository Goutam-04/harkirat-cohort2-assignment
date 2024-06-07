/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // const s=str.toLowerCase().trim();
// Remove non-alphanumeric characters and convert to lowercase
// /[^a-z0-9]/gi:

// This is a regular expression.
// / ... /: Delimits the regular expression.
// ^: Inside the square brackets [], the caret symbol ^ means "not". So [^...] means "not the characters specified inside the brackets".
// a-z: Matches any lowercase letter from 'a' to 'z'.
// 0-9: Matches any digit from '0' to '9'.
// Together, [^a-z0-9] means "any character that is not a lowercase letter or a digit".
// g: This flag means "global", so the search will be performed throughout the entire string, not just the first match.
// i: This flag means "case-insensitive", so it will match both lowercase and uppercase letters.
const s = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  for(let i=0;i<(s.length)/2;i++){
    if(s[i]!=s[s.length-i-1])return false
  }
  return true;
}

module.exports = isPalindrome;
