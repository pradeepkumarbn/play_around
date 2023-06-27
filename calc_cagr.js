function calculateCAGR(beginningValue, endingValue, numberOfYears) {
  const cagr = Math.pow(endingValue / beginningValue, 1 / numberOfYears) - 1;
  return cagr * 100;
}

// Example usage
const beginningValue = 1000;
const endingValue = 1500;
const numberOfYears = 5;
const cagr = calculateCAGR(beginningValue, endingValue, numberOfYears);
console.log(`CAGR: ${cagr.toFixed(2)}%`);
