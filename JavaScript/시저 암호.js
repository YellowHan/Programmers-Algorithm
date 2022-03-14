// 프로그래머스 Lv 1
// 시저 암호
// A~Z : 65~90, a~z : 97~122, ' ' = 32

const solution = (s, n) => {
  const arr = s.split("").map((e) => e.charCodeAt());
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") continue;
    // A to Z
    if (arr[i] > 64 && arr[i] < 91) {
      arr[i] += n;
      if (arr[i] > 90) {
        arr[i] = arr[i] - 90 + 64;
      }
    }
    // a to z
    if (arr[i] > 96 && arr[i] < 123) {
      arr[i] += n;
      if (arr[i] > 122) {
        arr[i] = arr[i] - 122 + 96;
      }
    }
  }
  return arr.map((e) => String.fromCharCode(e)).join("");
};

const s = "z";
const n = 25;

console.log(solution(s, n));
