function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const charCount: { [key: string]: number } = {};
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log(charCount);
  for (const char of t) {
    if (!charCount[char]) return false;
    console.log(charCount);
    charCount[char]--;
  }

  return true;
}

isAnagram("hello", "llohe")