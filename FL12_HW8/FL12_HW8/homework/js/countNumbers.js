function makeNumber(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

function countNumbers(str) {
  const sortedNumArray = makeNumber(str).split('').sort();
  const countNumbers = {};

  sortedNumArray.forEach((number) => {
    if (countNumbers[`'${number}'`] >= 1) {
      countNumbers[`'${number}'`]++;
    } else {
      countNumbers[`'${number}'`] = 1;
    }
  });

  return countNumbers;
}

countNumbers();
