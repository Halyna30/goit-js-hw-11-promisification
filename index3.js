// ============== Task 3 ==================

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  return new Promise((res, rej) => {
    const delay = randomIntegerFromInterval(200, 500);

    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        res(`Transaction ${transaction.id} processed in ${delay}ms`);
      } else {
        rej(
          `Error processing transaction ${transaction.id}. Please try again later.`
        );
      }
    }, delay);
  });
};

const logSuccess = (result) => {
  console.log(result);
};

const logError = (result) => {
  console.log(result);
};

/*
 * Работает так
 */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
// /*
//  * Должно работать так
//  */
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
