// 프로그래머스 Lv 1
// 콜라츠 추측

const solution = (n) => {
  let count = 0;
  while (n > 1 && count < 500) {
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    count++;
  }
  return count === 500 ? -1 : count;
};

const n = 1;
const n2 = 16;
const n3 = 626331;

console.log(solution(n));
console.log(solution(n2));
console.log(solution(n3));
