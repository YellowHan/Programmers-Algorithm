// 프로그래머스 Lv 1
// 체육복

const solution = (n, lost, reserve) => {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  // 여벌 체육복이 있었으나 도둑 맞아서 빌려줄 수 없는 학생
  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i])) {
      reserve[reserve.indexOf(lost[i])] = null;
      lost[i] = null;
    }
  }
  // 여벌 체육복 빌려입기
  for (let i = 0; i < lost.length; i++) {
    if (lost[i] === null) continue;
    if (reserve.includes(lost[i] - 1)) {
      reserve[reserve.indexOf(lost[i] - 1)] = null;
      lost[i] = null;
    }
    if (reserve.includes(lost[i] + 1)) {
      reserve[reserve.indexOf(lost[i] + 1)] = null;
      lost[i] = null;
    }
  }
  return n - lost.filter((e) => e !== null).length;
};

const n = 5;
const lost = [2, 4];
const reserve = [3];

console.log(solution(n, lost, reserve));
