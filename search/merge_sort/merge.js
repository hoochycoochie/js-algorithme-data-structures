/**
 *merge two sorted array
 * @param {*} a1  sorted array
 * @param {*} a2  sorted array
 * @returns result sorted array from merge
 */
function merge(a1, a2) {
  const results = [];
  let i = 0;
  let j = 0;

  //   while (i < a1.length && j < a2.length) {

  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      results.push(a1[i]);
      i++;
    }

    if (a1[i] > a2[j]) {
      results.push(a2[j]);
      j++;
    }

    if (a1[i] == a2[j]) {
      results.push(a1[i]);
      results.push(a2[j]);
      j++;
      i++;
    }
  }

  while (i < a1.length) {
    results.push(a1[i]);
    i++;
  }

  while (j < a2.length) {
    results.push(a2[j]);
    j++;
  }

  return results;
}

//console.log(merge([1, 10, 50], [2, 4, 99, 100]));
//console.log(merge([100], [1, 2, 3, 4, 5]));

function mergeSort(a) {
  if (a.length <= 1) return a;
  const middle = Math.floor(a.length * 0.5);
  const start = a.slice(0, middle);
  const end = a.slice(middle);

  const left = mergeSort(start);
  const right = mergeSort(end);
  return merge(left, right);
}
console.log(mergeSort([100, 4571, 2, 44, 3, 4, 5, 0.001, 0.5]));
