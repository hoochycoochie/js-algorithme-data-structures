/**
 * involves dividing a data set into smaller chunks
 * and then repeating a process with a subset of data.
 * this pattern can tremendously decrease time complexity
 */

/**
 * example find the index of
 */

function search(a, val) {
  for (let i = 0; i < a.length; i++) {
    const el = a[i];

    if (val == el) return i;
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
