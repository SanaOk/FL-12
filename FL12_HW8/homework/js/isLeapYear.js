function isLeapYear(date) {
  date = new Date(date);

  if (isNaN(date)) {
    return date.toString();
  } else {
    const year = date.getFullYear();
    if (new Date(year, 1, 29).getMonth() === 1) {
      return `${year} is a leap year`;
    } else {
      return `${year} is not a leap year`;
    }
  }
}

isLeapYear();
