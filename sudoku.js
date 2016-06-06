// test input strings for standalone node checks. will not work for web app.

//  var inputString = '...28.94.1.4...7......156.....8..57.4.......8.68..9.....196......5...8.3.43.28...';
//  var inputString = '8..6..9.5.............2.31...7318.6.24.....73...........279.1..5...8..36..3......';
//  var inputString = '.......214..6..................129..7.6..........3....51.....3....8.76...2.......';
//  var inputString = '010020300002003040050000006004700050000600008070098000300004090000800104006000000';
//  var inputString = '010020300002003040050000006004700050000100008070068000300004090000800104006000000';
//  var inputString = '......1.29...5..........8...6..7..4...1.........3..........146.32.....5....8.....';
//  var inputString = '000000000000000000000000000000000000000000000000000000000000000000000000000000000';

/* make puzzle into 2d array. once using int8 arrays, all higher order array
   functions break in Safari. so no indexOf, forEach, map, etc. Use for loops
   for anything like that. */

function make2dArray(array) {
  var array2d = [[]];
  for (var rowCounter = 0; rowCounter < 9; rowCounter++) {
    array2d[rowCounter] = new Uint8Array(9);
  }
  var row = 0;
  var col = 0;
  for (var i = 0; i < array.length; i++) {
    col = i % 9;
    if (i !== 0 && i % 9 === 0) {
      row++;
    }
    array2d[row][col] = array[i];
  }
  return array2d;
};

// create an array of cells in form [row, col] to hold blanks

function makeBlanksArray(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        var duple = [i, j];
        newArray.push(duple);
      }
    }
  }
  return newArray;
};

// Draw the puzzle with known squares in the console. Doesn't work in Safari.

// function drawPuzzle(array) {
//   var rowBorder = ' ---+---+---+---+---+---+---+---+--- ';
//   for (var i = 0; i < 9; i++) {
//     console.log(rowBorder);
//     console.log('| ' + array[i].join(' | ') + ' |');
//   }
//   console.log(rowBorder);
// }

// --------------

//   /* This is how I'm numbering the 9 3x3 boxes.
//
//       [[0, 1, 2],
//        [3, 4, 5],
//        [6, 7, 8]]
//
//   */

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
  return thisBox;
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

// called from the solving function to check an answer in a cell

function checkAnswer(array, row, col, value) {
  if (value === 0) {
    return false;
  }
  for (var i = 0; i < array[row].length; i++) {
    if (array[row][i] === value) {
      return false;
    }
  }
  for (var j = 0; j < array.length; j++) {
    if (array[j][col] === value) {
      return false;
    }
  }
  var boxNum = whichBox(row, col, false);
  var boxAnswers = getBox(array, boxNum);
  for (var k = 0; k < boxAnswers.length; k++) {
    if (boxAnswers[k] === value) {
      return false;
    }
  }
  return true;
}

// report the time it took to solve to the view

function reportSolved(ms) {
  var message = document.getElementById('message');
  message.innerHTML = 'Solved in ' + ms + 'ms.';
  message.className = '';
}

// the actual backtracking sudoku solving function

function brutishForce (array) {
  var puzzle = array;
  var blanks = makeBlanksArray(puzzle);
  var row;
  var col;
  var counter = 0;
  var answer;
  while (counter < blanks.length) {
    row = blanks[counter][0];
    col = blanks[counter][1];
    answer = puzzle[row][col];
    var viewCell = table.rows[row].childNodes[col];
    while (!checkAnswer(puzzle, row, col, answer) && answer <= 9) {
      answer++;
    }
    if (answer > 9) {
      puzzle[row][col] = 0;
      viewCell.innerHTML = '0'; // write to view
      counter--;
    } else {
      puzzle[row][col] = answer;
      var answerString = answer.toString();
      viewCell.innerHTML = answerString; // write to view
      viewCell.style.backgroundColor = 'hsl(180,100%,90%)';
      viewCell.style.color = 'hsl(0,0%,10%)';
      counter++;
    }
  }
  var endTime = new Date();
  return endTime;
}
