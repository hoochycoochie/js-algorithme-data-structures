/**
 * Implement a function called, 
 * areThereDuplicates which accepts a variable number of arguments, 
 * and checks whether there are any duplicates among the arguments passed in.  
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // 
 */

function areThereDuplicates(...a) {
  if (!a.length) return false;
  const f = {};
  for (const el of a) {
    f[el] = (f[el] || 0) + 1;
  }
  for (const k in f) {
    if (f[k] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true;
