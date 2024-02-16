/**
 *accepts 2 arrays and should return true 
 if every value in the array has it's corresponding value squared with same frequency
 * @param {*} arr1
 * @param {*} arr2  squared
 * @returns
 */
function same(arr1, arr2) {
  if (arr1.length != arr2.length) return false;

  let freq1 = {};

  for (let i = 0; i < arr1.length; i++) {
    const el = arr1[i];
    freq1[el] = (freq1[el] || 0) + 1;
  }

  let freq2 = {};

  for (let i = 0; i < arr2.length; i++) {
    const el = arr2[i];
    freq2[el] = (freq2[el] || 0) + 1;
  }
  console.log("freq1", freq1);
  console.log("freq2", freq2);
  for (key in freq1) {
    if (!(key ** 2 in freq2)) return false;
    if (freq1[key] != freq2[key ** 2]) return false;
  }

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
//console.log(same([1, 2, 3], [4, 9])); // true
//console.log(same([1, 2, 1], [4, 4, 1])); // false
