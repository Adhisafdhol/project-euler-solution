const largestPrimeFactor = (num) => {
  const primeFactors = [];

  for (let i = 1; i <= num; i++) {
    for (j = 2; j <= i; j++) {
      if (i % j === 0) {
        if (i === j) {
          if (num % i === 0) {
            primeFactors.push(i);
            num = num / i;
            i = 1;
          }
        }

        break;
      }
    }
  }

  return primeFactors;
};
