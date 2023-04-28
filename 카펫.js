function solution(brown, yellow) {
  const CARPET_SIZE = brown + yellow;
  const answer = [];

  for (let i = 3; i <= CARPET_SIZE; i++) {
    const width = CARPET_SIZE / i;
    const height = i;

    if (width < height) continue;

    if ((width - 2) * (height - 2) === yellow) {
      answer.push(width);
      answer.push(height);
      break;
    }
  }

  return answer;
}
