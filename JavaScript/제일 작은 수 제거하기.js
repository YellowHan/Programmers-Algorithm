/*
제일 작은 수 제거하기 : 
  정수를 저장한 배열에서 가장 작은 수를 제거한 배열을 리턴하는 함수를 완성하세요.
  리턴하려는 배열이 빈 배열인 경우에는 배열에 -1을 채워 리턴하세요.
제한 조건 : 
  배열의 길이는 1이상
  인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j]
*/

const solution = function(arr) {
  if(arr.length < 2) {
    arr.fill(-1);
  }
  else {
    let n = arr[0];
    arr.forEach(e => {
      if(n > e) n = e;
    });
    arr.splice(arr.indexOf(n),1);
  }
  return arr;
}

const solution2 = arr => {
  if(arr.length < 2) {
    arr.fill(-1);
  }
  else {
    arr.splice(arr.indexOf(Math.min(...arr)),1)
  }
  return arr;
}

arr = [4,3,2,1];
arr2 = [10];
console.log(solution(arr)); // [ 4, 3, 2 ]
console.log(solution2(arr2)); // [ -1 ]