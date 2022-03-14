// 프로그래머스 Lv 1
// 로또의 최고 순위와 최저 순위

const solution = (lottos, win_nums) => {
  const min = lottos.filter((number) => win_nums.includes(number)).length;
  const max = min + lottos.filter((number) => number === 0).length;
  const match = (number) => {
    switch (number) {
      case 2:
        return 5;
      case 3:
        return 4;
      case 4:
        return 3;
      case 5:
        return 2;
      case 6:
        return 1;
      default:
        return 6;
    }
  };
  return [match(max), match(min)];
};

const lottos = [0, 0, 0, 0, 0, 0];
const win_nums = [38, 19, 20, 40, 15, 25];

console.log(solution(lottos, win_nums));
