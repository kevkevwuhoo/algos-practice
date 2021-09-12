/**
 * Alternating Characters (Easy)
 *
 * You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.
 * Your task is to find the minimum number of required deletions.
 */

/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternatingCharacters(s) {
  let count = 0;

  // go through input string
  for (let i = 1; i < s.length; i++) {
    // check if char is same as previous
    // if yes, then add to deleted count
    // if not, then keep checking
    if (s[i] === s[i - 1]) {
      count++;
    }
  }

  // return deleted count
  return count;
}
