/**
 *
 * @param {Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function } n
 */
function recursiveRange(n) {
  if (n == 1) return 1;
  return n + recursiveRange(n - 1);
}

// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
