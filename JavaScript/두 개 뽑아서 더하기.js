/*
두 개 뽑아서 더하기 : 
  정수 배열 numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를
  배열에 오름차순으로 담아 return 하도록 함수를 완성해주세요.
제한 조건 : 
  numbers의 길이는 2 이상 100 이하
  numbers의 모든 수는 0 이상 100 이하
*/

const solution = (numbers) => {
  const result = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (i === j) continue;
      result.add(numbers[i] + numbers[j]);
    }
  }
  return [...result].sort((a, b) => a - b);
};

numbers = [2, 1, 3, 4, 1];
numbers2 = [5, 0, 2, 7];

console.log(solution(numbers)); // [ 2, 3, 4, 5, 6, 7 ]
console.log(solution(numbers2)); // [ 2, 5, 7, 9, 12 ]
