/**
 * Two Strings (Easy)
 *
 * Given two strings, determine if they share a common substring. A substring may be as small as one character.
 */

function twoStrings(s1, s2) {
  // use map to save letters in string 1
  // check if any letters in string 2 are in map
  const letters = {};
  for (let i = 0; i < s1.length; i++) {
    letters[s1[i]] = 1;
  }
  for (let j = 0; j < s2.length; j++) {
    if (letters[s2[j]]) {
      return 'YES';
    }
  }
  return 'NO';
}
