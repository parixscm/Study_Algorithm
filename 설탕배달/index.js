function solution(n) {
  let answer = 0;
  while (n > 0) {
    if (n % 5 === 0) {
      answer += n / 5;
      n = 0;
    } else {
      n -= 3;
      answer++;
    }
  }
  console.log(n === 0 ? answer : -1);
}

console.log(solution(18));
console.log(solution(4));
console.log(solution(6));
console.log(solution(9));
console.log(solution(11));
