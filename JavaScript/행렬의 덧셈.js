/*
행렬의 덧셈 : 
  행과 열의 크기가 같은 2개의 행렬 arr1과 arr2를 입력받아, 
  행렬 덧셈의 결과를 반환하는 함수를 완성해주세요.
제한 조건 : 
  행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않음
*/

const solution = (arr1, arr2) => {
  const result = arr1;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      result[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return result;
};

const arr1 = [
  [1, 2],
  [2, 3],
];
const arr2 = [
  [3, 4],
  [5, 6],
];

console.log(solution(arr1, arr2)); // [ [ 4, 6 ], [ 7, 9 ] ]
