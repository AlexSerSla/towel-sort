
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix == undefined) {
    result = [];
  } else {
    for (let index = 0; index < matrix.length; index++) {
      const element = matrix[index];
      const remOfDivByTwo = index % 2;
      if (remOfDivByTwo === 1) {
        for (let indexTwo = element.length - 1; indexTwo >= 0; indexTwo--) {
          const elementTwo = element[indexTwo];
          result.push(elementTwo);
        }
      } else {
        for (let indexTwo = 0; indexTwo < element.length; indexTwo++) {
          const elementTwo = element[indexTwo];
          result.push(elementTwo);
        }
      }
    }
  }
  return (result);
}

