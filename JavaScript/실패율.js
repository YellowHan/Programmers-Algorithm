const solution = (N, stages) => {
  const stage = Array(N + 1).fill(0);
  const failureRate = [];
  const result = [];
  // 스테이지 별 클리어 하지 못한 인원
  for (let i = 0; i < stages.length; i++) {
    stage[stages[i] - 1]++;
  }
  // 스테이지 별 실패율 계산
  let total = 0;
  for (let i = 0; i < stage.length - 1; i++) {
    if (stages.length - total === 0) {
      failureRate.push(0);
      continue;
    }
    failureRate.push(stage[i] / (stages.length - total));
    total += stage[i];
  }
  // 실패율 내림차순 정렬
  for (let i = 0; i < failureRate.length; i++) {
    result.push(failureRate.indexOf(Math.max(...failureRate)) + 1);
    failureRate[failureRate.indexOf(Math.max(...failureRate))] = -1;
  }
  return result;
};

const N = 4;
const stages = [3, 3, 3, 3, 3];

console.log(solution(N, stages));
