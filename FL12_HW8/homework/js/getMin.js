function getMin(...args) {
  const sortedArr = args.sort(function(a, b) {
    return a - b;
  });
  return sortedArr[0];
}

getMin();
