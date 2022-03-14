const solution = (id_list, report, k) => {
  const reportList = Array.from(new Set(report));
  const count = Array(id_list.length).fill(0);
  const result = [];
  // 신고당한 횟수
  reportList.forEach(
    (value) => count[id_list.indexOf(value.slice(value.indexOf(" ") + 1))]++
  );
  // k회 이상 신고당한 유저
  count.forEach((value, index) => {
    if (value >= k) result.push(id_list[index]); // frodo, neo
  });
  count.fill(0);
  // 처리 결과 메일을 받을 유저
  for (let i = 0; i < reportList.length; i++) {
    if (result.includes(reportList[i].slice(reportList[i].indexOf(" ") + 1))) {
      count[
        id_list.indexOf(reportList[i].slice(0, reportList[i].indexOf(" ")))
      ]++;
    }
  }
  return count;
};

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

const Name = "muzi frodo";

console.log(solution(id_list, report, k));
// console.log(Name.slice(Name.indexOf(" ") + 1)); // frodo
// console.log(id_list.indexOf(Name.slice(Name.indexOf(" ") + 1)));
