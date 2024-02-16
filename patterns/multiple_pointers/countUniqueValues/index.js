/**
 * accept a sorted array and counts the number of unique values
 */

function countUniqueValues(a) {
  if (!a.length) return 0;
  let count = 1;
  let start = 0;
  let end = a.length - 1;

  while (start < end) {
    if (a[start] != a[start + 1]) count++;

    start++;
  }
  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4
