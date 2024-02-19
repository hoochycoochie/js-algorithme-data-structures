/**
 * Multiple Pointers - isSubsequence
 Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
 In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 */

function isSubsequence(s1, s2) {
  if (s1.length > s2.length) return false;

  let i = 0;
  let j = 0;

  while (i < s1.length && j < s2.length) {
    if (s1[i] == s2[j]) {
      i++;
      j++;
    }

    if (s1[i] != s2[j]) {
      j++;
    }
  }

  return i == s1.length;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
