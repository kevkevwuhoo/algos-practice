/**
 * Sherlock and the Valid String (Medium)
 *
 * Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string s, determine if it is valid. If so, return YES, otherwise return NO.
 */

/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

/*****************************************************************
 *                    FAILS 3/20 TEST CASES
 * *************************************************************/

function isValid(s) {
  // use object to count characters
  const count = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    count[char] = count[char] || 0;
    count[char]++;
  }
  // check if the count of all characters are the same
  let nums = Object.values(count); // returns array of all values
  let freq = Math.min(...nums);
  let extra = 0;
  for (let key in count) {
    // if yes, return YES
    // if not, check if there are other counts that differ
    if (count[key] > freq) {
      extra += count[key] - freq;
    }
  }
  // check if the count varies only by 1
  // if yes, return YES
  // if no, return NO
  if (freq === 1 && extra === Object.keys(count).length - 1) {
    return 'YES';
  } else if (extra > 1) {
    return 'NO';
  }
  return 'YES';
}
