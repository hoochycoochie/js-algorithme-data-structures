function validAnagram(s1, s2) {
  if (s1.length != s2.length) return false;
  const a1 = s1.split("");
  const a2 = s2.split("");

  for (let i = 0; i < a1.length; i++) {
    const el = a1[i];
    const index = a2.indexOf(el);
    if (index == -1) return false;
    a2.splice(index, 1);
  }

  return true;
}

console.log(validAnagram("", "")); //true
console.log(validAnagram("aaz", "zza")); //false
console.log(validAnagram("anagram", "nagaram")); //true
console.log(validAnagram("rat", "car")); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("texttwisttime", "timetwisttext")); //true
