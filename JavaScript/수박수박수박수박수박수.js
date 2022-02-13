/*
수박수박수박수박수박수? : 
  길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 return하는 함수를 완성하세요.
  n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
제한 조건 : 
  n은 길이 10,000이하인 자연수
*/

const solution = n => {
  let str = '';
  for(let i = 0; i < n; i++) {
    str += i%2===0? '수' : '박';
  }
  return str;
}

const solution2 = n => Array.from({length: n}, (v, i) => i % 2 === 0? '수' : '박').join('');

console.log(solution(3)); // "수박수"
console.log(solution(4)); // "수박수박"
console.log(solution2(3)); // "수박수"
console.log(solution2(4)); // "수박수박"