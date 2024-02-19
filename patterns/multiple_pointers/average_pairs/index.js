/**
 * Multiple Pointers - averagePair
  Write a function called averagePair. Given a sorted array of integers and a target average, 
  determine if there is a pair of values in the array where the average of the pair equals the target average.
  There may be more than one pair that matches the average target.
 */

function averagePair(arr, avg) {
  const result = { result: false };
  if (!arr.length) return result;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const mean = (arr[start] + arr[end]) * 0.5;
    if (mean == avg)
      return { result: true, [start]: arr[start], [end]: arr[end], avg };
    if (mean > avg) end--;
    if (mean < avg) start++;
  }

  return result;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
