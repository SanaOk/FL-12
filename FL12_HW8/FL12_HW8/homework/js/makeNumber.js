function makeNumber(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

makeNumber();
