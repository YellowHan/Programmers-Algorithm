// 프로그래머스 Lv 1
// 폰켓몬

const solution = (nums) => {
  const newSet = new Set(nums);
  return nums.length / 2 < newSet.size ? nums.length / 2 : newSet.size;
};

const nums = [3, 1, 2, 3];
const nums2 = [3, 3, 3, 2, 2, 4];
const nums3 = [3, 3, 3, 2, 2, 2];

console.log(solution(nums));
console.log(solution(nums2));
console.log(solution(nums3));
