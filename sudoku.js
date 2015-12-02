var inputString = '...28.94.1.4...7......156.....8..57.4.......8.68..9.....196......5...8.3.43.28...';
var splitArray = inputString.split('');

var masterArray = [];
var masterRowAnswers = [];
var masterColAnswers = [];
var masterBoxAnswers = [];

// Convert zeros or periods in input array to spaces.

function blanksToSpaces(array) {
  var spacesArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === '0' || array[i] === '.') {
      spacesArray.push(' ');
    }
    else {
      spacesArray.push(array[i]);
    }
  }
  return spacesArray;
}

var spacesArray = blanksToSpaces(splitArray);

// Convert string digits to numbers.

function stringsToNums(array) {
  var numArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === ' ') {
      numArray.push(' ');
    }
    else {
      var num = parseInt(array[i], 10);
      numArray.push(num);
    }
  }
  return numArray;
}

var numArray = stringsToNums(spacesArray);

// Make the puzzle array into a 2d (9x9) array.

function make2dArray(array) {
  var array2d = [];
  var row = [];
  for (var i = 0; i < array.length; i++) {
    if (i != 0 && (i === 8 || (i - 8) % 9 === 0)) {
      row.push(array[i]);
      array2d.push(row);
      row = [];
    }
    else {
      row.push(array[i]);
    }
  }
  return array2d;
}

var masterArray = make2dArray(numArray);


// Draw the puzzle with known squares in the console.

function drawPuzzle(array) {
  var rowBorder = ' ---+---+---+---+---+---+---+---+--- ';
  for (var i = 0; i < 9; i++) {
    console.log(rowBorder);
    console.log('| ' + array[i].join(' | ') + ' |');
  }
  console.log(rowBorder);
}

function countAnswers(array) {
  var answerCount = 0;
  var unansweredCount = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] != ' ') {
        answerCount++;
      }
      else {
        unansweredCount++;
      }
    }
  }
  if (answerCount + unansweredCount != 81) {
    console.log('You don\'t have 81 answers and something is wrong here.');
  }
  else {
    console.log('Number of answers: ' + answerCount);
    console.log('Number of unanswered: ' + unansweredCount);
  }
  return array;
}

// Get an array containing the answers in a specific row.

function getRow(array, rowNum) {
  if (rowNum < 1 || rowNum > 9) {
    console.log('Your row number must be an integer between 1 and 9.');
  }
  else {
    var thisRow = [];
    for (var i = 0; i < 9; i++) {
      var answer = array[rowNum - 1][i];
      thisRow.push(answer);
    }
    // console.log('Row ' + rowNum + ': ' + thisRow);
    process.stdout.write('Row ' + rowNum + ': ');
    console.log(thisRow);
    puzzle.row[rowNum] = thisRow;
    return thisRow;
  }
}

// Get the answers in a specific column.

function getCol(array, colNum) {
  if (colNum < 1 || colNum > 9) {
    console.log('Your column number must be an integer between 1 and 9.');
  }
  else {
    var thisCol = [];
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array[i].length; j++) {
        if (j === (colNum - 1)) {
          thisCol.push(array[i][j]);
        }
      }
    }
    process.stdout.write('Col ' + colNum + ': ');
    console.log(thisCol);
    puzzle.col[colNum] = thisCol;
    return thisCol;
  }
}

/* This is how I'm numbering the 9 3x3 boxes.

    [[0, 1, 2],
     [3, 4, 5],
     [6, 7, 8]]

*/

// Get the answers for a specific 3x3 box.

function getBox(array, boxNum) {
  var thisBox = [];
  switch (boxNum) {
    case 0:
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          if (array[i][j] != ' ') {
            thisBox.push(array[i][j]);
          }
        }
      }
      break;
    case 1:
      for (var i = 0; i < 3; i++) {
        for (var j = 3; j < 6; j++) {
          if (array[i][j] != ' ') {
            thisBox.push(array[i][j]);
          }
        }
      }
      break;
    case 2:
      for (var i = 0; i < 3; i++) {
        for (var j = 6; j < 9; j++) {
          if (array[i][j] != ' ') {
            thisBox.push(array[i][j]);
          }
        }
      }
      break;
    case 3:
      for (var i = 3; i < 6; i++) {
        for (var j = 0; j < 3; j++) {
          if (array[i][j] != ' ') {
            thisBox.push(array[i][j]);
          }
        }
      }
      break;
    case 4:
      for (var i = 3; i < 6; i++) {
        for (var j = 3; j < 6; j++) {
          if (array[i][j] != ' ') {
            thisBox.push(array[i][j]);
          }
        }
      }
      break;
    case 5:
      for (var i = 3; i < 6; i++) {
        for (var j = 6; j < 9; j++) {
          if (array[i][j] != ' ') {
            thisBox.push(array[i][j]);
          }
        }
      }
      break;
    case 6:
      for (var i = 6; i < 9; i++) {
        for (var j = 0; j < 3; j++) {
          if (array[i][j] != ' ') {
            thisBox.push(array[i][j]);
          }
        }
      }
      break;
    case 7:
      for (var i = 6; i < 9; i++) {
        for (var j = 3; j < 6; j++) {
          if (array[i][j] != ' ') {
            thisBox.push(array[i][j]);
          }
        }
      }
      break;
    case 8:
      for (var i = 6; i < 9; i++) {
        for (var j = 6; j < 9; j++) {
          if (array[i][j] != ' ') {
            thisBox.push(array[i][j]);
          }
        }
      }
      break;
    default:
      console.log('Box not computed.');
  }
  // process.stdout.write('Box ' + boxNum + ': ');
  // console.log(thisBox);
  return thisBox;
}

function getRowAnswers(array, log) {
  array.forEach(function(row) {
    var thisRowAnswers = [];
    row.forEach(function(cell) {
      if (cell !== ' ') {
        thisRowAnswers.push(cell);
      }
    });
    masterRowAnswers.push(thisRowAnswers);
  });
  if (log === true) {
    console.log('Row Answers: ');
    console.log(masterRowAnswers);
  }
}

function getColAnswers(array, log) {
  for (var i = 0; i < 9; i++) {
    var thisColAnswers = [];
    array.forEach(function(row) {
      if (row[i] != ' ') {
        thisColAnswers.push(row[i]);
      }
    });
    masterColAnswers.push(thisColAnswers);
  }
  if (log === true) {
    console.log('Column Answers: ');
    console.log(masterColAnswers);
  }
}

function getBoxAnswers(array, log) {
  for (var i = 0; i < 9; i++) {
    var thisBox = getBox(masterArray, i);
    masterBoxAnswers.push(thisBox);
  }
  if (log === true) {
    console.log('Box Answers: ');
    console.log(masterBoxAnswers);
  }
}

// Find first empty cell to start testing solutions. Run this inside brutishForce.

function findFirstEmpty(array, log) {
  var firstAnswer = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] === ' ') {
        firstEmpty = [i, j];
        if (log === true) {
          console.log('First Empty: ', firstEmpty);
        }
        return firstEmpty;
      }
    }
  }
}

// Which box, 0-8, is a given cell in?

function whichBox(row, col, log) {
  var cellBox;

    // top 3

  if (row >= 0 && row <= 2 && col >=0 && col <= 2) {
    cellBox = 0;
  } else if (row >= 0 && row <=2 && col >=3 && col <= 5) {
    cellBox = 1;
  } else if (row >= 0 && row <=2 && col >=6 && col <= 8) {
    cellBox = 2;

    // middle 3

  } else if (row >= 3 && row <=5 && col >=0 && col <= 2) {
    cellBox = 3;
  } else if (row >= 3 && row <=5 && col >=3 && col <= 5) {
    cellBox = 4;
  } else if (row >= 3 && row <=5 && col >=6 && col <= 8) {
    cellBox = 5;

    // bottom 3

  } else if (row >= 6 && row <=8 && col >=0 && col <= 2) {
    cellBox = 6;
  } else if (row >= 6 && row <=8 && col >=3 && col <= 5) {
    cellBox = 7;
  } else if (row >= 6 && row <=8 && col >=6 && col <= 8) {
    cellBox = 8;
  }
  if (log === true) {
    console.log('Cell Box: ' + cellBox);
  }
  return cellBox;
}

// function checkAnswer(row, col, box, value, log) {
//   var rowAnswers = [masterRowAnswers[row]];
//   var colAnswers = [masterColAnswers[col]];
//   var boxAnswers = [masterBoxAnswers[box]];
//   if (rowAnswers.indexOf(value) !== -1) {
//     if (log === true) {
//       console.log('Value: ' + value + ' found in row.');
//     }
//     return false;
//   } else if (colAnswers.indexOf(value) !== -1) {
//     if (log === true) {
//       console.log('Value: ' + value + ' found in column.');
//     }
//     return false;
//   } else if (boxAnswers.indexOf(value) !== -1) {
//       if (log === true) {
//         console.log('Value: ' + value + ' found in box.');
//       }
//     return false;
//   } else {
//     return true;
//   }
// }

function checkAnswer(array, row, col, value) {
  if (array[row].indexOf(value) !== -1) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i][col] === value) {
      return false;
    }
  }
  var boxNum = whichBox(row, col, false);
  var boxAnswers = getBox(array, boxNum);
  if (boxAnswers.indexOf(value) !== -1) {
    return false;
  }
  return true;
}

function brutishForce (array, log) {
  /*  1. find the first empty square (done already with another function)
      2. put the smallest number between 1 and 9 that isn't in the answer arrays
         into that cell. (return the first number that isn't in the answer arrays)
         if you reach col 8 and find a valid answer, move on to the next row.
      3. move on to the next cell and put the smallest valid answer into that
         cell. if no answer is valid move back one cell (column) and increase
         that cell's answer to the next valid number.
      4. if you reach row 8 col 8 and find a valid answer, return the current
         puzzle and draw it with drawPuzzle.
  */

  // start row, col, and box which will be checked each time
  var row = firstEmpty[0];
  var col = firstEmpty[1];
  var solvingPuzzle = array;
  var answer = 1;
  while (row < 9) {
    while (col < 9){
      if (solvingPuzzle[row][col] !== ' ') {
        col++;
        answer = 1;
      }
      if (checkAnswer(solvingPuzzle, row, col, answer)) {
        solvingPuzzle[row][col] = answer;
        drawPuzzle(solvingPuzzle);
        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
        console.log('row: ' + row, 'col: ' + col, 'answer: ' + answer);
        if (row === 8 && col === 8) {
          console.log('Solved!');
          drawPuzzle(solvingPuzzle);
          return true;
        }
        col++;
        answer = 1;
        if (col > 8) {
          row++;
          col = 0;
          answer = 1;
        }
      } else {
        answer++;
        if (col === 0 && answer > 9) {
          row--;
          col = 8;
          answer = solvingPuzzle[row][col]++;
        }
        if (answer > 9) {
          col--;
          answer = solvingPuzzle[row][col]++;
        }
      }
    }
  }
}
drawPuzzle(masterArray);

getRowAnswers(masterArray, false);

getColAnswers(masterArray,false);

getBoxAnswers(masterArray,false);

var firstEmpty = findFirstEmpty(masterArray,false);

brutishForce(masterArray);
