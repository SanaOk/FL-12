const A = 1;
const B = 2;
const C = 3;
const D = 8;
const E = 5;
const F = 7;
const G = 58;
const H = 14;
const I = 48;
const J = 31;
const K = 29;

// Task 1

function convert(...args) {
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'string') {
      args[i] = Number(args[i]);
    } else {
      args[i] = `${args[i]}`;
    }
  }
  return args;
}

convert('1', B, C, '4');

// Task 2

function executeForEach(arr, callback) {
  for (const el of arr) {
    callback(el);
  }
}

executeForEach([A, B, C], function(el) {
  console.log(el * B);
});

// Task 3

function mapArray(arr, callback) {
  const mappedArray = [];
  executeForEach(arr, (el) => {
    if (typeof el === 'string') {
      el = Number(el);
    }
    mappedArray.push(callback(el));
  });
  return mappedArray;
}

mapArray([B, '5', D], function(el) {
  return el + C;
});

// Task 4

function filterArray(arr, callback) {
  const filteredArray = [];
  executeForEach(arr, (el) => {
    if (callback(el)) {
      filteredArray.push(el);
    }
  });
  return filteredArray;
}

filterArray([B, E, D], function(el) {
  return el % B === 0;
});

// Task 5

function flipOver(str) {
  let flippedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    flippedStr += str[i];
  }
  return flippedStr;
}

flipOver('hey world');

// Task 6

function makeListFromRange(arr) {
  const listFromRange = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    listFromRange.push(i);
  }
  return listFromRange;
}

makeListFromRange([B, F]);

// Task 7

function getArrayOfKeys(arr, key) {
  const arrOfKeys = [];
  executeForEach(arr, (obj) => {
    arrOfKeys.push(obj[key]);
  });
  return arrOfKeys;
}

const actors = [
  {name: 'tommy', age: 36},
  {name: 'lee', age: 28}
];
getArrayOfKeys(actors, 'name');

// Task 8

function substitute(arr) {
  const substitutedArray = [];

  mapArray(arr, (el) => {
    const MIN_NUMBER = 30;
    if (el < MIN_NUMBER) {
      substitutedArray.push('*');
    } else {
      substitutedArray.push(el);
    }
  });
  return substitutedArray;
}

substitute([G, H, I, B, J, K]);

// Task 9

function getPastDay(date, daysAgo) {
  const HOURS_IN_DAY = 24;
  const MIN_IN_HOUR = 60;
  const SEC_IN_MIN = 60;
  const MILLISECONDS_IN_SEC = 1000;
  const millisecondsAgo = daysAgo * HOURS_IN_DAY * MIN_IN_HOUR * SEC_IN_MIN * MILLISECONDS_IN_SEC;
  return new Date(date - millisecondsAgo).getDate();
}

const YEAR = 2019;
const date = new Date(YEAR, 0, B);
getPastDay(date, A);

// Task 10

function formatDate(dateObj) {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const startsWithoutZero = 10;
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();

  if (hours < startsWithoutZero) {
    hours = `0${hours}`;
  }
  if (minutes < startsWithoutZero) {
    minutes = `0${minutes}`;
  }
  return `${year}/${month}/${day} ${hours}:${minutes}`;
}

formatDate(new Date());
