var inputString = '...28.94.1.4...7......156.....8..57.4.......8.68..9.....196......5...8.3.43.28...';
var splitArray = inputString.split('');
var allPossible = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var masterArray = [];
var masterRowAnswers = [];
var masterColAnswers = [];
var masterBoxAnswers = [];

// This will be populated so you can call rows, cols, and boxes with dot notation.

var puzzle = {
  row: [],
  col: [],
  box: []
};

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

// Get the answers for all the rows.

function getAllRows() {
  for (var i = 1; i <= 9; i++) {
    getRow(masterArray, i);
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

// Get the answers for all columns.

function getAllCols() {
  for (var i = 1; i <= 9; i++) {
    getCol(masterArray, i);
  }
}

/* This is how I'm numbering the 9 3x3 boxes.

    [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

*/

// Get the answers for a specific 3x3 box. Maybe there's a better/shorter way?

function getBox(array, boxNum) {
  if (boxNum < 1 || boxNum > 9) {
    console.log('Your box number must be an integer between 1 and 9.');
  }
  else {
    var thisBox = [];
    switch (boxNum) {
      case 1:
        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 3; j++) {
            if (array[i][j] != ' ') {
              thisBox.push(array[i][j]);
            }
          }
        }
        break;
      case 2:
        for (var i = 0; i < 3; i++) {
          for (var j = 3; j < 6; j++) {
            if (array[i][j] != ' ') {
              thisBox.push(array[i][j]);
            }          }
        }
        break;
      case 3:
        for (var i = 0; i < 3; i++) {
          for (var j = 6; j < 9; j++) {
            if (array[i][j] != ' ') {
              thisBox.push(array[i][j]);
            }          }
        }
        break;
      case 4:
        for (var i = 3; i < 6; i++) {
          for (var j = 0; j < 3; j++) {
            if (array[i][j] != ' ') {
              thisBox.push(array[i][j]);
            }          }
        }
        break;
      case 5:
        for (var i = 3; i < 6; i++) {
          for (var j = 3; j < 6; j++) {
            if (array[i][j] != ' ') {
              thisBox.push(array[i][j]);
            }          }
        }
        break;
      case 6:
        for (var i = 3; i < 6; i++) {
          for (var j = 6; j < 9; j++) {
            if (array[i][j] != ' ') {
              thisBox.push(array[i][j]);
            }          }
        }
        break;
      case 7:
        for (var i = 6; i < 9; i++) {
          for (var j = 0; j < 3; j++) {
            if (array[i][j] != ' ') {
              thisBox.push(array[i][j]);
            }          }
        }
        break;
      case 8:
        for (var i = 6; i < 9; i++) {
          for (var j = 3; j < 6; j++) {
            if (array[i][j] != ' ') {
              thisBox.push(array[i][j]);
            }          }
        }
        break;
      case 9:
        for (var i = 6; i < 9; i++) {
          for (var j = 6; j < 9; j++) {
            if (array[i][j] != ' ') {
              thisBox.push(array[i][j]);
            }          }
        }
        break;
      default:
        console.log('Box not computed.');
    }
    // process.stdout.write('Box ' + boxNum + ': ');
    // console.log(thisBox);
    puzzle.box[boxNum] = thisBox;
    return thisBox;
  }
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
    console.log('Row Answers: ')
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
  for (var i = 1; i <= 9; i++) {
    var thisBox = getBox(masterArray, i);
    masterBoxAnswers.push(thisBox);
  }
  if (log === true) {
    console.log('Box Answers: ');
    console.log(masterBoxAnswers);
  }
}

// Solve puzzle by trying all possibilities after taking answers into account.

function brutishForce(array, log) {
  var tryCounter = 0;
  var cellRow;
  var cellCol;
  var cellBox;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      var cell = array[i][j];
      if (cell == ' ') {
        cellRow = i;
        cellCol = j;
        if (i < 3 && j < 3) {
          cellBox = 0;
        } else if (i < 3 && j < 6) {
          cellBox = 1;
        } else if (i < 3 && j < 9) {
          cellBox = 2;
        } else if (i < 6 && j < 3) {
          cellBox = 3;
        } else if (i < 6 && j < 6) {
          cellBox = 4;
        } else if (i < 6 && j < 9) {
          cellBox = 5;
        } else if (i < 9 && j < 3) {
          cellBox = 6;
        } else if (i < 9 && j < 6) {
          cellBox = 7;
        } else if (i < 9 && j < 9) {
          cellBox = 8;
        }
        console.log('Cell Row: ' + cellRow);
        console.log('Cell Col: ' + cellCol);
        console.log('Cell Box: ' + cellBox);
        console.log('-----------');

      }
    }
  }
}

drawPuzzle(masterArray);

getRowAnswers(masterArray, true);

getColAnswers(masterArray, true);

getBoxAnswers(masterArray, true);

brutishForce(masterArray);
