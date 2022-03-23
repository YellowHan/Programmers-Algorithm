const solution = (board, moves) => {
  let basket = []; // 인형을 담을 바구니
  let count = 0; // 터트려져 사라진 인형 개수
  for (let i = 0; i < moves.length; i++) {
    // 바구니 맨 위에 담겨있는 인형과 그 아래 인형이 같다면 터트린다.
    // 처음 인형이 한 개만 담겼을 때는 이전에 담긴 인형이 없어서 undefined가 나오므로 체크
    if (
      basket[basket.length - 2] !== undefined &&
      basket[basket.length - 2] === basket[basket.length - 1]
    ) {
      basket.pop(); // 맨 위에 있는 인형 터트리기
      basket.pop(); // 그 아래 있는 인형 터트리기
      count += 2; // 인형이 2개 터져서 2증가
    }
    for (let j = 0; j < board.length; j++) {
      // 빈 공간(0)을 제외한 moves가 가리키는 자리에 인형(숫자)이 있으면
      // 그 인형(숫자)를 바구니에 담는다.
      if (board[j][moves[i] - 1] !== 0) {
        basket.push(board[j][moves[i] - 1]);
        // 인형을 바구니에 담으면 인형이 있던 자리는 빈 공간(0)으로 표시한다.
        board[j][moves[i] - 1] = 0;
        // 인형을 한 번 담고나면 다음 moves를 위해 반복문을 멈춘다.
        break;
      }
    }
  }
  return count;
};

const solution2 = (board, moves) => {
  let basket = []; // 인형을 담을 바구니
  let count = 0; // 터트려져 사라진 인형 갯수
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // 빈 공간(0)이 아닌지 체크(인형이 있는지 여부)
      if (board[j][moves[i] - 1] !== 0) {
        // 현재 크레인에 집힌 인형과 바구니 맨 위의 인형을 비교 해서 터트리기
        if (basket[basket.length - 1] === board[j][moves[i] - 1]) {
          board[j][moves[i] - 1] = 0; // 인형이 있던 자리를 빈 공간(0)으로 만들기(현재 집힌 인형은 담지 않음)
          basket.pop(); // 바구니 맨 위에 있는 인형 터트리기
          count += 2; // 터진 인형의 개수 2 증가
          break; // 인형을 한 번 집었으므로 다음 moves 수행을 위해 반복문 중단
        }
        // 크레인에 집힌 인형과 바구니 맨 위의 인형이 같지 않은 경우
        basket.push(board[j][moves[i] - 1]); // 인형을 바구니에 담는다.
        board[j][moves[i] - 1] = 0; // 인형이 있던 자리를 빈 공간(0)으로 만들기
        break; // 인형을 한 번 집었으므로 다음 moves 수행을 위해 반복문 중단
      }
    }
  }
  return count;
};

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
