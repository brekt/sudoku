var masterString = '...28.94.1.4...7......156.....8..57.4.......8.68..9.....196......5...8.3.43.28...';
var masterArray = masterString.split('');
var allPossible = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// This will be populated so you can call rows, cols, and boxes with dot notation.

var puzzle = { 
  row: [], //
  col: [], 
  box: [] 
};

// Convert zeros or periods in input array to spaces.

function blanksToSpaces(array) {
  var periodArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === '0' || array[i] === '.') {
      periodArray.push(' ');
    }
    else {
      periodArray.push(array[i]);
    }
  }
  return periodArray;
}

masterArray = blanksToSpaces(masterArray);

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

masterArray = stringsToNums(masterArray);

// Make the puzzle array into a 2d (9x9) array.

function make2dArray(array) {
  var puzzle = [];
  var row = [];
  for (var i = 0; i < array.length; i++) {
    if (i != 0 && (i === 8 || (i - 8) % 9 === 0)) {
      row.push(array[i]);
      puzzle.push(row);
      row = [];
    }
    else {
      row.push(array[i]);
    }
  }
  return puzzle;
}

masterArray = make2dArray(masterArray);

// Draw the puzzle with known squares in the console.

function drawPuzzle(array) {
  var rowBorder = ' ---+---+---+---+---+---+---+---+--- ';
  for (var i = 0; i < 9; i++) {
    console.log(rowBorder);
    console.log('| ' + array[i].join(' | ') + ' |');
  }
  console.log(rowBorder);
}

// Get possibilites with basic deduction.

function findPossibilities(array) {
  var possibilitiesArray = [];
  for (var i = 0; i < 9; i++) {
    var row = [];
    for (var j = 0; j < 9; j++) {
      if (array[i][j] === ' ') {
        row.push(allPossible);
      }
      else {
        row.push(array[i][j]);
      }
      possibilitiesArray.push(row);
    }
  }
  console.log('Possibilities array: ');
  console.log(possibilitiesArray);
  console.log('Length of possibilites array: ' + possibilitiesArray.length);
  return possibilitiesArray;
}

// function findPossibilites(array) {
//   var possibilitiesArray = [];
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array[i].length; j++) {
//       if (array[i][j] != ' ') {
//         var answer = [array[i][j]];
//         possibilitiesArray.push(answer);
//       }
//       else {
//         possibilitiesArray.push(allPossible);
//       }
//     }
//   }
//   console.log('Possibilities array: ');
//   console.log(possibilitiesArray);
//   console.log('Length of possibilites array: ' + possibilitiesArray.length);
//   return possibilitiesArray;
// }

// Count the number of answered and unanswered cells. Should add up to 81.

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
    process.stdout.write('Box ' + boxNum + ': ');
    console.log(thisBox); 
    puzzle.box[boxNum] = thisBox;
    return thisBox;
  }
}

function getAllBoxes() {
  for (var i = 1; i <= 9; i++) {
    getBox(masterArray, i);
  }
}

drawPuzzle(masterArray);

findPossibilities(masterArray);

countAnswers(masterArray);

getAllRows();

// getAllCols();

// getAllBoxes();

console.log(puzzle.row[1]);


