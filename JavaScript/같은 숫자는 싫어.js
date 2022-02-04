/*
같은 숫자는 싫어 : 
  배열 arr에서 연속적으로 나타나는 숫자를 제거하고 남은 수를 return하는 함수를 완성해주세요.
  제거된 후 남은 수들을 반환할 때, 원소들의 순서를 유지해야 합니다.
제한 조건 : 
  배열 arr의 크기 : 1,000,000 이하의 자연수
  배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
*/
const solution = arr => arr.filter((e, i, arr)=> e !== arr[i+1]);

arr1 = [1,1,3,3,0,1,1]
arr2 = [4,4,4,3,3]
console.log(solution(arr1)); // [ 1, 3, 0, 1 ]
console.log(solution(arr2)); // [ 4, 3 ]