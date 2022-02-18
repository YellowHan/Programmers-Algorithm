/*
부족한 금액 계산하기 : 
  놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면
  원래 이용료의 N배를 받기로 하였습니다.
  처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
  놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록
  함수를 완성하세요.
  금액이 부족하지 않으면 0을 return 하세요.
제한 조건 : 
  놀이기구의 이용료 price : 1 ≤ price ≤ 2,500
  처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000
  놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500
*/
const solution = (price, money, count) => {
  let result = 0;
  for(let i = 1; i <= count; i++) {
    result += price * i;
  }
  result -= money
  if(result < 0) result = 0

  return result;
}

price = 3
money = 20
count = 4

console.log(solution(price, money, count)); // 10
