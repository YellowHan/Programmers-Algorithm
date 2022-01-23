/*
문자열 다루기 기본 : 
  문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
  예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
제한사항 : 
  s는 길이 1 이상, 길이 8 이하인 문자열입니다.
  */
const solution = (s) =>
  String(Number(s)).length == 4 || 
  String(Number(s)).length == 6;

const test1 = "1234";
const test2 = "123 ";

console.log(solution(test1)); // true
console.log(solution(test2)); // false
