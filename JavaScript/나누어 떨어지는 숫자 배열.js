/*
나누어 떨어지는 숫자 배열 : 
  array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수를 작성해주세요.
  divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
제한 조건 : 
  arr은 자연수를 담은 배열
  정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j]
  divisor는 자연수
  array는 길이 1 이상인 배열
*/

const solution = (arr, divisor) => {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % divisor === 0) {
      result.push(arr[i])
    }
  }
  if(result.length < 1) {
    result.push(-1)
  }
  result.sort((a, b) => a - b)
  return result;
}

arr1 = [5, 9, 7, 10];
arr2 = [2, 36, 1, 3];
arr3 = [3,2,6];

divisor1 = 5
divisor2 = 1
divisor3 = 10

console.log(solution(arr1, divisor1)) // [ 5, 10 ]
console.log(solution(arr2, divisor2)) // [ 1, 2, 3, 36 ]
console.log(solution(arr3, divisor3)) // [ -1 ]
