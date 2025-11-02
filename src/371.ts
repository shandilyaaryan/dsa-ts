function getSum(a: number, b: number): number {
  while (b !== 0) {
    const carry = (a & b) << 1; // Calculate carry
    a = a ^ b; // Sum without carry
    b = carry; // Move carry to b
  }
  return a;
}

console.log(getSum(39, 45));
