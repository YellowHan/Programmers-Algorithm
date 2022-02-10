/*
숫자 문자열과 영단어 : 
  숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어질 때
  s가 의미하는 원래 숫자를 return하는 함수를 완성하세요.
제한 조건 : 
  1 ≤ s의 길이 ≤ 50
  s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않음
  return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어짐
*/
const solution = function(s) {
  const number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const arr = s.split('');
  let result = '';
  let tmp = '';
  for(let i = 0; i < arr.length; i++) {
    if(Number.isNaN(Number(arr[i]))) {
      tmp += arr[i];
      if(number.indexOf(tmp) > -1) {
        result += number.indexOf(tmp);
        tmp = '';
      }
    }
    else {
      result += arr[i];
    }
  }
  return Number(result);
}

console.log(solution("one4seveneight")); // 1478
console.log(solution("23four5six7")); // 234567
console.log(solution("2three45sixseven"	)); // 234567
console.log(solution("123")); // 123