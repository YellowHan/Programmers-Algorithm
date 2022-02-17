/*
K번째수 : 
  배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째 수를 구하세요.
  array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
  array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]
  1에서 나온 배열을 정렬하면 [2, 3, 5, 6]
  2에서 나온 배열의 3번째 숫자는 5
제한 조건 : 
  array의 길이는 1 이상 100 이하
  array의 각 원소는 1 이상 100 이하
  commands의 길이는 1 이상 50 이하
  commands의 각 원소는 길이가 3
*/

const solution = (array, commands) => {
  const arr = [];
  let tmp;
  for(let i = 0; i < commands.length; i++) {
    tmp = array.slice(commands[i][0]-1, commands[i][1]).sort((a, b) => a - b);
    arr[i] = tmp[commands[i][2]-1];
  }
  return arr;
}

array = [1, 5, 2, 6, 3, 7, 4];
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

console.log(solution(array, commands)); // [5, 6, 3]