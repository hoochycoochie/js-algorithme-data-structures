/**
 * Write a function called sameFrequency.
 *  Given two positive integers, 
 * find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)
 */

function sameFrequency(n1, n2) {
  const a1 = n1.toString().split("");

  const a2 = n2.toString().split("");

  if (a1.length != a2.length) return false;
  const f1 = {};
  const f2 = {};

  for (let i = 0; i < a1.length; i++) {
    const el = a1[i];
    f1[el] = (f1[el] || 0) + 1;
  }

  for (let i = 0; i < a2.length; i++) {
    const el = a2[i];
    f2[el] = (f2[el] || 0) + 1;
  }
  for (k in f1) {
    if (!(k in f2)) return false;
    if (f1[k] != f2[k]) return false;
  }
  return true;
}

//console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false
