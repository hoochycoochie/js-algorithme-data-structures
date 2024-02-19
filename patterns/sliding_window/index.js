/**
 * this pattern involves creating a window which can either be an array or number
 * from one position to another.
 * Depending on a certain condition,
 *  the window either increases or closes (and a new window is created)
 * Very useful for keeping track of a subset of data in an array/string etc ..
 */

/**
 * accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 * the array not necessarely sorted
 */

function maxSubArraySum(a = [], n) {
  if (!a.length || a.length < n) return null;

  let max_sum = 0;
  for (let i = 0; i < n; i++) {
    max_sum += a[i];
  }

  let temp = max_sum;
  for (let i = n; i < a.length; i++) {
    temp = temp - a[i - n] + a[i];
    max_sum = Math.max(temp, max_sum);
  }

  return max_sum;
}
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17

// console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
// console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13

// console.log(maxSubArraySum([], 4)); // null
