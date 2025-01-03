const sumOfMultiplesOfAOrB = (a, b, limit) => {
  const array = [];

  for (let i = 0; i < limit; i++) {
    if (i % a === 0 || i % b === 0) {
      array.push(i);
    }
  }

  return array.reduce((sum, current) => sum + current);
};
