function solution(name, yearning, photo) {
  const hash = new Map();
  name.forEach((el, idx) => hash.set(el, yearning[idx]));

  return photo.map(el =>
    el.reduce((prev, curr) => {
      return prev + (hash.get(curr) || 0);
    }, 0)
  );
}
