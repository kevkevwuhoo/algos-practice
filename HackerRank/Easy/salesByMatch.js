/**
 * Sales by Match (Easy)
 *
 * There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.v
 */

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  let pairs = 0;
  // sort the array
  const sort = ar.sort();
  // check if current index is equal to next index
  for (let i = 0; i < sort.length; i++) {
    // if yes, add 1 to counter for pairs
    // add 1 to index to skip
    // if no, check next index
    if (sort[i] === sort[i + 1]) {
      pairs++;
      i++;
    }
  }

  // return the count
  return pairs;
}

// solution using sets:
function sockMerchant(n, ar) {
  // counter to count pairs
  let pairs = 0;
  // use set to hold numbers
  const socks = new Set();
  // go through array
  for (let i = 0; i < ar.length; i++) {
    // if number is not in set, then add it to set
    // if number is in set, then remove it from set and add to counter
    if (socks.has(ar[i])) {
      socks.delete(ar[i]);
      pairs++;
    } else {
      socks.add(ar[i]);
    }
  }
  // return counter
  return pairs;
}
