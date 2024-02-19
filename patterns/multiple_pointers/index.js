/**
 * creating pointers or values that correspond to an index or position
 * and move towarsd the beginning, end or middle based on a certain condition.
 * Very efficient for solving problems with minimal space complexity as well
 */
// the array is sorted asc
function sumZero(a, sum = 0) {
  let start = 0;
  let end = a.length - 1;

  while (start < end) {
    const val1 = a[start];
    const val2 = a[end];
    const result = val1 + val2;
    if (result == sum) return [val1, val2];

    if (result > sum) end--;
    if (result < sum) start++;
  }
  return undefined;
}
