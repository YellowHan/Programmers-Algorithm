/*
가운데 글자 가져오기 : 
  단어 s의 가운데 글자를 반환하는 함수를 완성하세요.
  단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
제한 조건 : 
  s의 길이는 1 이상 100 이하인 스트링
  */
const solution = s => s.length%2===0? s.charAt(s.length/2-1)+s.charAt(s.length/2) : s.charAt(s.length/2);

console.log(solution("abcde")); // c
console.log(solution("qwer")); // we