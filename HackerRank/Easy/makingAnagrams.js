/**
 * Strings: Making Anagrams
 * 
 * A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Determine this number.

Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions required to make a and b anagrams. Any characters can be deleted from either of the strings.
 */

/*
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function makeAnagram(a, b) {
  // use object to count chars
  let count = {};
  let total = 0;
  // for chars in a, increment their value
  a.split('').forEach((char) => {
    count[char] = count[char] || 0;
    count[char]++;
  });
  // for chars in b, decrement their value
  b.split('').forEach((char) => {
    count[char] = count[char] || 0;
    count[char]--;
  });
  // go through object and total up the chars that are not equal to zero
  for (let key in count) {
    if (count[key] !== 0) {
      total += Math.abs(count[key]);
    }
  }
  // return that total
  return total;
}
