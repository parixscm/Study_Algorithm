let input = require("fs").readFileSync("./test.txt").toString().split("\n");
let [n, k] = input[0].split(" ").map(num => +num);
const coins = input
  .slice(1)
  .map(num => +num)
  .reverse();

let answer = 0;
for (const coin of coins) {
  if (k === 0) {
    break;
  }

  if (coin > k) continue;
  else {
    answer += ~~(k / coin);
    k %= coin;
  }
}
console.log(answer);
