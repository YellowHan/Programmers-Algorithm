const solution = function(strings, n) {
  strings.sort();
  strings.sort(function (a, b) {
    if(a.charAt(n) > b.charAt(n)) {
      return 1;
    }
    if(a.charAt(n) < b.charAt(n)) {
      return -1;
    }
    if(a.charAt(n) > b.charAt(n)) {
      return 1;
    }
    return 0;
  })
  return strings;
}

strings = ["sun", "bed", "car"];
n = 1

console.log(solution(strings, n)) // [ 'car', 'bed', 'sun' ]

strings2 = ["abce", "abcd", "cdx"];
n2 = 2

console.log(solution(strings2, n2)) // [ 'abcd', 'abce', 'cdx' ]
