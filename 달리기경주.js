function solution(players, callings) {
  // { 선수명: 순위 }
  const hash = new Map();
  players.forEach((name, idx) => hash.set(name, idx));

  callings.forEach(name => {
    const idx = hash.get(name);
    const front = players[idx - 1];
    [players[idx], players[idx - 1]] = [players[idx - 1], players[idx]];
    hash.set(name, idx - 1);
    hash.set(front, idx);
  });

  return players;
}
