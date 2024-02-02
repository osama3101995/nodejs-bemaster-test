//////////////////////////////////THIRD TASK//////////////////////////////////

function getOddNumbersUpToN(number) {
    if (typeof number !== 'number' || number <= 0 || !Number.isInteger(number)) {
      throw new Error('Input must be a positive integer');
    }
  
    const oddNumbers = [];
    
    for (let i = 1; i <= number; i += 2) {
      oddNumbers.push(i);
    }
  
    return oddNumbers;
  }
  
  console.log(getOddNumbersUpToN(20)); 
  