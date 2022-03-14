// 프로그래머스 Lv 1
// 이상한 문자 만들기

const solution = (s) => {
  const result = s.split("");
  let j = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === " ") {
      j = 0;
      continue;
    }
    if (j % 2 === 0) {
      result[i] = result[i].toUpperCase();
    }
    if (j % 2 === 1) {
      result[i] = result[i].toLowerCase();
    }
    j++;
  }
  return result.join("");
};

const s = "aa    aBB  Bcc cDD D";

console.log(solution(s));
