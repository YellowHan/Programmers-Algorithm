const solution = (n, arr1, arr2) => {
  const result = [];
  let tmp = "";
  arr1.map((e) => e.toString(2).padStart(n, "0"));
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (
        arr1[i].toString(2).padStart(n, "0")[j] === "1" ||
        arr2[i].toString(2).padStart(n, "0")[j] === "1"
      ) {
        tmp += "#";
        continue;
      }
      tmp += " ";
    }
    result.push(tmp);
    tmp = "";
  }
  return result;
};

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

console.log(solution(n, arr1, arr2));
