import masterString from './global.js';


// This will be populated so you can call rows, cols, and boxes with dot notation.

var puzzle = { 
  row: [], //
  col: [], 
  box: [] 
};

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
    // process.stdout.write('Row ' + rowNum + ': ');
    // console.log(thisRow);
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
    // process.stdout.write('Col ' + colNum + ': ');
    // console.log(thisCol);
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
            thisBox.push(array[i][j]);
          }
        }
        break;
      case 2:
        for (var i = 0; i < 3; i++) {
          for (var j = 3; j < 6; j++) {
            thisBox.push(array[i][j]);
          }
        }
        break;
      case 3:
        for (var i = 0; i < 3; i++) {
          for (var j = 6; j < 9; j++) {
            thisBox.push(array[i][j]);
          }
        }
        break;      
      case 4:
        for (var i = 3; i < 6; i++) {
          for (var j = 0; j < 3; j++) {
            thisBox.push(array[i][j]);
          }
        }
        break;
      case 5:
        for (var i = 3; i < 6; i++) {
          for (var j = 3; j < 6; j++) {
            thisBox.push(array[i][j]);
          }
        }
        break;
      case 6:
        for (var i = 3; i < 6; i++) {
          for (var j = 6; j < 9; j++) {
            thisBox.push(array[i][j]);
          }
        }
        break;
      case 7:
        for (var i = 6; i < 9; i++) {
          for (var j = 0; j < 3; j++) {
            thisBox.push(array[i][j]);
          }
        }
        break; 
      case 8:
        for (var i = 6; i < 9; i++) {
          for (var j = 3; j < 6; j++) {
            thisBox.push(array[i][j]);
          }
        }
        break;
      case 9:
        for (var i = 6; i < 9; i++) {
          for (var j = 6; j < 9; j++) {
            thisBox.push(array[i][j]);
          }
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

// Define all 9 3x3 boxes.

function getAllBoxes() {
  for (var i = 1; i <= 9; i++) {
    getBox(masterArray, i);
  }
}

module.exports = 'get';