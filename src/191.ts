function hammingWeight(n: number): number {
  let count = 0;

  while (n !== 0) {
    count += n & 1; // Check if last bit is 1
    n = n >>> 1; // Shift right (>>> for unsigned)
  }

  return count;
}
