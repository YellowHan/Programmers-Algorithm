/*
정수 내림차순으로 배치하기 : 
  정수 n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
제한 조건 : 
  n은 1이상 8000000000 이하인 자연수
  */
const solution = n => Number(String(n).split('').sort((a, b) => b - a).join(''));

console.log(solution(118372)); // 873211