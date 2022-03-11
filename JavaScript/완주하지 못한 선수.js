/*
완주하지 못한 선수 : 
  마라톤에 참여한 선수들의 이름이 담긴 배열 participant와
  완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
  완주하지 못한 선수의 이름을 return 하도록 함수를 작성해주세요.
제한 조건 : 
  마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하
  completion의 길이는 participant의 길이보다 1 작음
  참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있음
  참가자 중에는 동명이인이 있을 수 있음
*/

// 완주하지 못한 선수

// 효율성 탈락
const solution = (participant, completion) => {
  completion.map((e) => participant.splice(participant.indexOf(e), 1));
  return participant.join("");
};

// 통과는 했지만 해시 공부 해야함!!
const solution2 = (participant, completion) => {
  participant.sort();
  completion.sort();
  for (let i = 0; i < completion.length; i++) {
    if (completion[i] !== participant[i]) {
      return participant[i];
    }
  }
  return participant[participant.length - 1];
};

const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];

console.log(solution2(participant, completion));
