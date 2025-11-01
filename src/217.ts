// function containsDuplicate(nums: number[]): boolean {
//   let ans = true;
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] == nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log(containsDuplicate([1, 2, 3, 4, 3]));

// Brute force method lets do the effecient one by using set

function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>();
  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}
