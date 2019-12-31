function pipe(initialNumber, ...functions) {
  return functions.reduce((incomingValue, currentFunction) => {
    return currentFunction(incomingValue);
  }, initialNumber);
}

pipe();
