/*
3진법 뒤집기 : 
  자연수 n을 3진법 상에서 앞뒤로 뒤집은 후, 다시 10진법으로 표현한 수를 return하는 함수를 완성하세요.
제한 조건 : 
  n은 1 이상 100,000,000 이하인 자연수
*/
const solution = s => parseInt(s.toString(3).split('').reverse().join(''),3);

console.log(solution(45)); // 7
console.log(solution(125)); // 229