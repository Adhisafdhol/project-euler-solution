const sumOfEvenFibonacciNumbers = (limit) => {
  const fibonacciNumbers = [1, 1];

  for (let i = 1; fibonacciNumbers[fibonacciNumbers.length - 1] < limit; i++) {
    const nextNumber = fibonacciNumbers[i] + fibonacciNumbers[i - 1];

    if (nextNumber < limit) {
      fibonacciNumbers.push(nextNumber);
    } else {
      break;
    }
  }

  return fibonacciNumbers.reduce((sum, current) => {
    if (current % 2 === 0) {
      return sum + current;
    } else {
      return sum;
    }
  }, 0);
};
