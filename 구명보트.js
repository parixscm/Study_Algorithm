function solution(people, limit) {
  people.sort((a, b) => b - a);
  let [left, right] = [0, people.length - 1];
  let answer = 0;

  while (left < right) {
    let weightSum = people[left] + people[right];
    if (weightSum > limit) {
      left++;
    } else {
      left++;
      right--;
    }
    answer++;
  }

  if (left === right) answer++;

  return answer;
}
