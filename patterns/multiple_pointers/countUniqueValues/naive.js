/**
 * accept a sorted array and counts the unique values
 */

function countUniqueValues(a) {
  if (!a.length) return 0;

  const result = [];

  for (let i = 0; i < a.length; i++) {
    const el = a[i];
    if (result.indexOf(el) == -1) result.push(el);
  }
  return result.length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4
