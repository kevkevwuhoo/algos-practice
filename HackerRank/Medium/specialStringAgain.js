/**
 * Special String Again (Medium)
 *
 * A string is said to be a special string if either of two conditions is met:
 * All of the characters are the same, e.g. aaa.
 * All characters except the middle one are the same, e.g. aadaa.
 * A special substring is any substring of a string which meets one of those criteria. Given a string, determine how many special substrings can be formed from it.
 */

function substrCount(n, s) {
  // variable to count special substrings
  let count = n;
  let subStr = s[0];
  // go through each letter in input string s
  for (let i = 1; i < n; i++) {
    // check next letters to see if they form special substring
    if (s[i] === s[i - 1]) {
      count += subStr.length;
      subStr = subStr + s[i];
    } else {
      for (let j = 0; j < subStr.length; j++) {
        if (s[i + 1 + j] === subStr[0]) {
          count++;
        } else {
          break;
        }
      }
      subStr = s[i];
    }
  }
  // return count
  return count;
}
