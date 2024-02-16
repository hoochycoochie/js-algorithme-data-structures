/**
 * write a function which accept a sorted array of integers.
 * It should return the first pair where the sum is zero.Return both vlues to zero or undefined
 * @param {*} params
 */
function sumZero(a, sum = 0) {
  for (let i = 0; i < a.length; i++) {
    const el = a[i];

    for (let j = i + 1; j < a.length; j++) {
      const next1 = a[j];

      if (el + next1 == sum) return [el, next1];
    }
  }
  return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3], 0));
