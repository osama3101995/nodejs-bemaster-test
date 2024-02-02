////////////////////////////SECOND TASK/////////////////////////////////////

function calculateSinOfProductAndSum(firstOperand, secondOperand, multiplier) {
    let sumOfOperands = firstOperand + secondOperand;
    let product = sumOfOperands * multiplier;
    let sineResult = Math.sin(product);
    return sineResult;
  }