// 1st 풀이
function solution(keymap, targets) {
  const hash = new Map();
  keymap.forEach(el => {
    for (let i = 0; i < el.length; i++) {
      if (!hash.has(el[i])) {
        hash.set(el[i], i + 1);
        continue;
      }
      if (hash.get(el[i]) > i + 1) hash.set(el[i], i + 1);
    }
  });

  let answer = [];
  for (const x of targets) {
    let tmp = 0;
    let flag = false;
    for (const y of x) {
      if (!hash.has(y)) {
        answer.push(-1);
        flag = true;
        break;
      }
      tmp += hash.get(y);
    }
    if (flag) continue;
    answer.push(tmp);
  }

  return answer;
}

// 2nd 풀이
function solution(keymap, targets) {
  const hash = new Map();
  for (const outer of keymap) {
    [...outer].forEach((inner, idx) => {
      const target = hash.get(inner) < idx + 1 ? hash.get(inner) : idx + 1;
      hash.set(inner, target);
    });
  }

  let answer = [];
  for (const outer of targets) {
    answer.push(
      [...outer].reduce((prev, curr) => prev + hash.get(curr), 0) || -1
    );
  }

  return answer;
}
