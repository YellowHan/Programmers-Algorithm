/*
문자열 내 p와 y의 개수 : 
  문자열 s의 'p'와 'y'의 개수가 같으면 true, 다르면 false를 반환하는 함수를 완성하세요.
  대소문자를 구분하지 않으며, 'p'와 'y'가 모두 하나도 없는 경우는 항상 true를 리턴합니다.
제한 조건 : 
  문자열 s의 길이는 50이하
  문자열은 알파벳으로만 이루어져 있음
*/

const solution = s => {
  let p = 0;
  let y = 0;
  for(let i = 0; i < s.length; i++) {
    if(s.charAt(i).toUpperCase() === 'P') p++
    if(s.charAt(i).toUpperCase() === 'Y') y++
  }
  return p === y? true : false;
}

console.log(solution("pPoooyY")); // true
console.log(solution("Pyy")); // false
console.log(solution("ppppyy")); // false