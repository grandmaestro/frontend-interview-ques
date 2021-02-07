function getPartitions(inputStr) {

  const cache = {};
  for (let i = 0; i < inputStr.length; i++) {
    if (!cache[inputStr[i]]) {
      cache[inputStr[i]] = [i, i];
    } else {
      cache[inputStr[i]][1] = i;
    }
  }
  console.log(cache);

  const ranges = [];
  for (let key in cache) {
    const tuple = cache[key];
    if (!ranges.length) {
      ranges.push(tuple);
    } else {
      const overlapRange = ranges.find((r) => {
        return (((tuple[0] > r[0]) && (tuple[1] < r[1])) || ((tuple[0] < r[0]) && (tuple[1] < r[1]) && (tuple[1] > r[0]))
          || ((tuple[0] > r[0]) && (tuple[1] > r[1]) && (tuple[0] < r[1])));
      });
      if (overlapRange) {
        const newRange = [Math.min(overlapRange[0], tuple[0]), Math.max(overlapRange[1], tuple[1])];
        overlapRange[0] = newRange[0];
        overlapRange[1] = newRange[1];
      } else {
        ranges.push(tuple);
      }
    }
  }
  return ranges;
}

console.log(getPartitions('abcdaedfghklml'));