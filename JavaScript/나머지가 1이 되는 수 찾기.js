/*
나머지가 1이 되는 수 찾기 : 
  자연수 n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return하는 함수를 완성하세요.
제한 조건 : 
  3 <= n <= 1,000,000
*/
function solution (n) {
  let num = 0;
  for(let i = 1; i < n; i++) {
    if(n % i === 1) {
      num = i;
      break;
    }
  }
  return num;
}

console.log(solution(10)); // 3
console.log(solution(12)); // 11
