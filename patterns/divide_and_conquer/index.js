/**
 * involves dividing a data set into smaller chunks
 * and then repeating a process with a subset of data.
 * this pattern can tremendously decrease time complexity
 */

/**
 * example find the index of
 * array sorted asc
 */

function search(a, val) {
  if (!a || !a.length) return -1;
  let start = 0;
  let end = a.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    const result = a[middle];
    if (val == result) return middle;
    if (val < result) start = middle + 1;
    if (val > result) end = middle - 1;
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
