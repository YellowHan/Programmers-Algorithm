/*
핸드폰 번호 가리기 : 
  전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 *로 가린 문자열을 리턴하는 함수를 완성해주세요.
제한 조건 : 
  s는 길이 4이상, 20이하인 문자열
*/
const solution = number => "*".repeat(number.length - 4).concat(number.slice(-4));

console.log(solution("01033334444")); // "*******4444"
console.log(solution("027778888")); // "*****8888"