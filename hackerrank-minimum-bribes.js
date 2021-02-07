function minimumBribes(q) {
  let bribeCount = 0;
  for (let index = 1; index <= q.length; index++) {
    if (index < q[index - 1]) {
      if (q[index - 1] - index < 3) {
        bribeCount = bribeCount + (q[index - 1] - index);
      } else {
        bribeCount = 'Too chaotic';
        break;
      }
    }
  }
  console.log(bribeCount);
}

minimumBribes([2, 1, 5, 3, 4]);