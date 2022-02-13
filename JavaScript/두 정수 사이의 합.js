/*
두 정수 사이의 합 : 
  두 정수 a, b가 주어졌을 때 a와 b사이에 속한 모든 정수의 합을 return하는 함수를 완성하세요.
  예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
제한 조건 : 
  a, b가 같은 경우 둘 중 아무 수나 리턴
  a, b는 -10,000,000 이상 10,000,000 이하인 정수
  a, b의 대소관계는 정해져 있지 않음
*/

const solution = (a, b) => Array.from({length: Math.max(a, b)-Math.min(a, b)+1}, (v, i) => i + Math.min(a, b)).reduce((x, i) => x + i); // 비효율

const solution2 = (a, b) => {
  let sum = 0;
  for(let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }
  return sum;
}

console.log(solution(3, 5)); // 12
console.log(solution(3, 3)); // 3
console.log(solution2(3, 3)); // 3
console.log(solution2(5, 3)); // 12
