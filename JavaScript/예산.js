const solution = (d, budget) => {
  const result = d.sort((a, b) => a - b);
  for (let i = 0; i < result.length; i++) {
    if (budget - result[i] >= 0) {
      budget -= result[i];
      continue;
    }
    return i;
  }
  return d.length;
};

const d = [1, 3, 2, 5, 4];
const budget = 9;

const d2 = [2, 2, 3, 3];
const budget2 = 10;

console.log(solution(d, budget)); // 3
console.log(solution(d2, budget2)); // 4
