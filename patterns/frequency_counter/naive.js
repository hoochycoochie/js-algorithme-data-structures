/**
 *accepts 2 arrays and should return true 
 if every value in the array has it's corresponding value squared with same frequency
 * @param {*} arr1
 * @param {*} arr2  squared
 * @returns
 */
function same(arr1, arr2) {
  if (arr1.length != arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i] ** 2;
    const index = arr2.indexOf(element);
    if (index == -1) return false;
    arr1.splice(i, 1);
    arr2.splice(index, 1);
    console.log(arr1, arr2);
  }

  return true;
}

//console.log(same([1, 2, 3], [4, 1, 9])); // true
//console.log(same([1, 2, 3], [4, 9])); // true
console.log(same([1, 2, 1], [4, 4, 1])); // false
