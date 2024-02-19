function binarySearch(arr, val) {
  if (!arr.length || !val) return -1;
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) * 0.5);

  while (arr[middle] != val && start <= end) {
    if (arr[middle] > val) end = middle - 1;
    if (arr[middle] < val) start = middle + 1;
    middle = Math.floor((start + end) * 0.5);
  }

  if (arr[middle] === val) return middle;
  return -1;
}
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15));
