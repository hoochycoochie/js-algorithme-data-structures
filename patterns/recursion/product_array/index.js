function productOfArray(arr) {
  if (arr.length == 0) return 1;
  const n = arr[0];
  arr.splice(0, 1);
  return n * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3])); //6
console.log(productOfArray([1, 2, 3, 10])); // 60
