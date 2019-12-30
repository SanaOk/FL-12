let start = true;
const MAX_RANGE_INCREASE = 4;
const PRIZE_INCREASE = 2;
const ATTEMPTS_COUNT = 3;

while (start) {
  const MIN = 0;
  let max = 8;
  const MAX_PRIZE = 100;
  const MIDDLE_PRIZE = 50;
  const MIN_PRIZE = 25;
  const prizePerAttempts = [MAX_PRIZE, MIDDLE_PRIZE, MIN_PRIZE];
  let totalPrize = 0;
  let continueGame = true;
  start = confirm('Do you want to play a game?');

  if (start) {
    do {
      let currentAttempt = 0;
      const prizeNumber = Math.round(Math.random() * (max - MIN) + MIN);
      while (currentAttempt < ATTEMPTS_COUNT) {
        const userNumber = parseInt(prompt('Choose a roulette pocket number from ' + MIN + ' to ' + max +
          '\nAttempts left: ' + (ATTEMPTS_COUNT - currentAttempt) + '\n' + 'Total prize: ' + totalPrize +'$\n' +
          'Possible prize on current attempt: ' + prizePerAttempts[currentAttempt] + '$'));
        if (userNumber === prizeNumber) {
          continueGame = confirm('Congratulation, you won! Your prize is: ' + prizePerAttempts[currentAttempt] +
            '$. Do you want to continue?');
          totalPrize += prizePerAttempts[currentAttempt];
          currentAttempt = ATTEMPTS_COUNT;
          if (continueGame === true) {
            max += MAX_RANGE_INCREASE;
            for (let i = 0; i < ATTEMPTS_COUNT; i++) {
              prizePerAttempts[i] = prizePerAttempts[i] * PRIZE_INCREASE;
            }
          }
        } else {
          currentAttempt++;
          if (currentAttempt === ATTEMPTS_COUNT) {
            continueGame = false;
          }
        }
      }
    } while (continueGame === true);
    alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
  } else {
    alert('You did not become a billionaire, but can.');
  }
}
