module.exports = function solveSudoku(matrix) {
  const sudokuMatrix = matrix;

  isSolved(sudokuMatrix);

  function isSolved(sudokuMatrix) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (sudokuMatrix[i][j] !== 0) {
          continue;
        }else{
          for (let value = 1; value <= 9; value++) {
            if (isSafe(sudokuMatrix, i, j, value)) {
              sudokuMatrix[i][j] = value;
              if (isSolved(sudokuMatrix)) {
                return true;
              }else{
                sudokuMatrix[i][j] = 0;
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  //check the value in the column
  function checkInColumn(sudokuMatrix, i, j, value) {
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
      if (sudokuMatrix[rowIndex][j] === value) {
        return true;
      }
    }
    return false;
  }
  //check the value in the row
  function checkInRow(sudokuMatrix, i, j, value) {
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
      if (sudokuMatrix[i][rowIndex] === value) {
        return true;
      }
    }
    return false;
  }
  //check value in 3x3 box
  function checkInBox(sudokuMatrix, i, j, value) {
    //find the position of the value in current box
    const m = Math.floor((i / 3)) * 3; 
    const n = Math.floor((j / 3)) * 3; 

    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
      for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
        if (sudokuMatrix[m + rowIndex][n + columnIndex] === value) {
          return true;
        }
      }
    }
    return false;
  }
    
  function isSafe(sudokuMatrix, i, j, value) {
    return !checkInColumn(sudokuMatrix, i, j, value) && 
           !checkInRow(sudokuMatrix, i, j, value) && 
           !checkInBox(sudokuMatrix, i, j, value);
  }
  return sudokuMatrix;
}
