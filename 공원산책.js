function solution(park, routes) {
  // 공원의 가로와 세로 길이 구하기
  const [width, height] = [park[0].length, park.length];

  // 시작점 구하기
  let start;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (park[i][j] === "S") {
        start = [i, j];
        break;
      }
    }
    if (start) break;
  }

  const directions = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  routes.forEach(route => {
    const [direction, moveNum] = [route.split(" ")[0], +route.split(" ")[1]];
    let [nx, ny] = start;
    let step = 0;

    while (step < moveNum) {
      nx += directions[direction][0];
      ny += directions[direction][1];

      if (
        nx < 0 ||
        ny < 0 ||
        nx >= height ||
        ny >= width ||
        park[nx][ny] === "X"
      )
        break;
      step++;
    }
    if (step === moveNum) start = [nx, ny];
  });

  return start;
}
