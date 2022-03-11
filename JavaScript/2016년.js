/*
2016년 : 
  두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수를 완성하세요.
제한 조건 : 
  2016년은 윤년
  2016년 a월 b일은 실제로 있는 날
*/

const solution = (a, b) => {
  const date = new Date(2016, a - 1, b);
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return week[date.getDay()];
};

const a = 3;
const b = 1;

console.log(solution(a, b));
