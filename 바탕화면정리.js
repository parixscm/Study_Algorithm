function solution(wallpaper) {
  let [minX, minY] = [50, 50];
  let [maxX, maxY] = [0, 0];
  let [row, col] = [wallpaper.length, wallpaper[0].length];

  wallpaper.forEach((word, idx1) => {
    [...word].forEach((alphabet, idx2) => {
      if (wallpaper[idx1][idx2] === "#") {
        [minX, minY] = [Math.min(minX, idx1), Math.min(minY, idx2)];
        [maxX, maxY] = [Math.max(maxX, idx1 + 1), Math.max(maxY, idx2 + 1)];
      }
    });
  });

  return [minX, minY, maxX, maxY];
}
