// 프로그래머스 Lv 1
// 최소직사각형

const solution = (sizes) => {
  const width = sizes.map((elem) => elem[0]);
  const height = sizes.map((elem) => elem[1]);
  for (let i = 0; i < sizes.length; i++) {
    if (height[i] > width[i]) {
      [width[i], height[i]] = [height[i], width[i]];
    }
  }
  return Math.max(...width) * Math.max(...height);
};

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

console.log(solution(sizes));
