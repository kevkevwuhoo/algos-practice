/**
 * Two Sum (Easy)
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length || nums[i] < target; i++) {
    let currentNum = nums[i];
    let currentDiff = target - currentNum;

    for (let j = i + 1; j < nums.length || nums[j] < target; j++) {
      if (nums[j] === currentDiff) {
        return [i, j];
      }
    }
  }
};
