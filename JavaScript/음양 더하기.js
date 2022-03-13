// 프로그래머스 Lv 1
// 음양 더하기

const solution = (absolutes, signs) =>
  absolutes.reduce(
    (acc, curr, index) => (signs[index] ? acc + curr : acc + -curr),
    0
  );

const absolutes = [4, 7, 12];
const signs = [true, false, true];

const absolutes2 = [1, 2, 3];
const signs2 = [false, false, true];

console.log(solution(absolutes, signs));
console.log(solution(absolutes2, signs2));
