/*
약수의 합 : 
  정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
제한 사항 : 
  n은 0 이상 3000이하인 정수입니다.
*/

const solution = (n) =>
  Array.from(new Array(n), (x, i) => i + 1).reduce((a, c) => (n % c === 0 ? a + c : a + 0),0);

const sum = n => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
};

console.log(sum(12)); // 28
console.log(solution(12)); // 28
