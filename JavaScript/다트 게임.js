// 프로그래머스 Lv 1
// 다트 게임

const solution = (dartResult) => {
  let result = [];
  const number = (i) => {
    if (Number(dartResult[i - 1]) === 0 && Number(dartResult[i - 2]) === 1) {
      return Number(dartResult[i - 2] + dartResult[i - 1]);
    }
    return Number(dartResult[i - 1]);
  };
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "S") result.push(number(i) ** 1);
    if (dartResult[i] === "D") result.push(number(i) ** 2);
    if (dartResult[i] === "T") result.push(number(i) ** 3);
    if (dartResult[i] === "*") {
      result[result.length - 1] *= 2;
      result[result.length - 2] *= 2;
    }
    if (dartResult[i] === "#") {
      result[result.length - 1] *= -1;
    }
  }
  return result.reduce((p, c) => p + c);
};

// const dartResult = "1S2D*3T";
// const dartResult2 = "1D2S#10S";
const dartResult3 = "1D2S0T";
// const dartResult4 = "1S*2T*3S";
// const dartResult5 = "1D#2S*3S";
// const dartResult6 = "1T2D3D#";
// const dartResult7 = "1D2S3T*";

console.log(solution(dartResult3));
