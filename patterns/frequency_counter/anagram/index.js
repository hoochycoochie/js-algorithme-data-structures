function validAnagram(s1, s2) {
  if (s1.length != s2.length) return false;
  const a1 = s1.split("");
  const a2 = s2.split("");

  const freq1 = {};

  for (let i = 0; i < a1.length; i++) {
    const el = a1[i];
    freq1[el] = (freq1[el] || 0) + 1;
  }

  const freq2 = {};

  for (let i = 0; i < a2.length; i++) {
    const el = a2[i];
    freq2[el] = (freq2[el] || 0) + 1;
  }

  for (key in freq1) {
    if (!(key in freq2)) return false;
    if (freq1[key] != freq2[key]) return false;
  }
  return true;
}

console.log(validAnagram("", "")); //true
console.log(validAnagram("aaz", "zza")); //false
console.log(validAnagram("anagram", "nagaram")); //true
console.log(validAnagram("rat", "car")); //false
console.log(validAnagram("awesome", "awesom")); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("texttwisttime", "timetwisttext")); //true
