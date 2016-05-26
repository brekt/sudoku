
  var startTime = new Date();

  // var inputString = '...28.94.1.4...7......156.....8..57.4.......8.68..9.....196......5...8.3.43.28...';
  // var inputString = '8..6..9.5.............2.31...7318.6.24.....73...........279.1..5...8..36..3......';
  // var inputString = '.......214..6..................129..7.6..........3....51.....3....8.76...2.......';
  // var inputString = '010020300002003040050000006004700050000600008070098000300004090000800104006000000';
  // var inputString = '010020300002003040050000006004700050000100008070068000300004090000800104006000000';
  var inputString = '......1.29...5..........8...6..7..4...1.........3..........146.32.....5....8.....';
  // var inputString = '000000000000000000000000000000000000000000000000000000000000000000000000000000000';

  var masterArray = inputString.split('');

  var masterRowAnswers = [];
  var masterColAnswers = [];
  var masterBoxAnswers = [];


  // make blanks spaces

  masterArray.forEach(function(value, index) {
    if (value === '0' || value === '.') {
      masterArray[index] = ' ';
    } else if (value >= '0' || value <= '9') {
      masterArray[index] = parseInt(value, 10);
    }
  });


  masterArray = function make2dArray() {
    var array2d = [];
    var row = [];
    masterArray.forEach(function(value, index) {
      if (index !== 0 && (index === 8 || (index - 8) % 9 === 0)) {
        row.push(masterArray[index]);
        array2d.push(row);
        row = [];
      } else {
        row.push(masterArray[index]);
      }
    });
    return array2d;
  }();

  console.log(masterArray);

//
//   function makeUnansweredDupleArray(array) {
//     var dupleUnansweredArray = [];
//     for (var i = 0; i < array.length; i++) {
//       for (var j = 0; j < array[i].length; j++) {
//         if (array[i][j] === ' ') {
//           var duple = [i, j];
//           dupleUnansweredArray.push(duple);
//         }
//       }
//     }
//     return dupleUnansweredArray;
//   }


  var dupleUnansweredArray = function() {
    var newArray = [];
    masterArray.map(function(rowValue, rowIndex) {
      masterArray[rowIndex].map(function(colValue, colIndex) {
        if (masterArray[rowIndex][colIndex] === ' ') {
          var duple = [rowIndex, colIndex];
          newArray.push(duple);
        }
      });
    });
    return newArray;
  }();

  console.log(dupleUnansweredArray);


  // Draw the puzzle with known squares in the console.

  function drawPuzzle(array) {
    var rowBorder = ' ---+---+---+---+---+---+---+---+--- ';
    for (var i = 0; i < 9; i++) {
      console.log(rowBorder);
      console.log('| ' + array[i].join(' | ') + ' |');
    }
    console.log(rowBorder);
  }

//   // Get an array containing the answers in a specific row.
//
  // function getRow(array, rowNum) {
  //   if (rowNum < 1 || rowNum > 9) {
  //     console.log('Your row number must be an integer between 1 and 9.');
  //   }
  //   else {
  //     var thisRow = [];
  //     for (var i = 0; i < 9; i++) {
  //       var answer = array[rowNum - 1][i];
  //       thisRow.push(answer);
  //     }
  //     process.stdout.write('Row ' + rowNum + ': ');
  //     console.log(thisRow);
  //     puzzle.row[rowNum] = thisRow;
  //     return thisRow;
  //   }
  // }



//   // Get the answers in a specific column.
//
//   function getCol(array, colNum) {
//     if (colNum < 1 || colNum > 9) {
//       console.log('Your column number must be an integer between 1 and 9.');
//     }
//     else {
//       var thisCol = [];
//       for (var i = 0; i < array.length; i++) {
//         for (var j = 0; j < array[i].length; j++) {
//           if (j === (colNum - 1)) {
//             thisCol.push(array[i][j]);
//           }
//         }
//       }
//       process.stdout.write('Col ' + colNum + ': ');
//       console.log(thisCol);
//       puzzle.col[colNum] = thisCol;
//       return thisCol;
//     }
//   }
//
//   /* This is how I'm numbering the 9 3x3 boxes.
//
//       [[0, 1, 2],
//        [3, 4, 5],
//        [6, 7, 8]]
//
//   */
//
//   // Get the answers for a specific 3x3 box.
//
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
//
  // function getRowAnswers(array, log) {
  //   array.forEach(function(row) {
  //     var thisRowAnswers = [];
  //     row.forEach(function(cell) {
  //       if (cell !== ' ') {
  //         thisRowAnswers.push(cell);
  //       }
  //     });
  //     masterRowAnswers.push(thisRowAnswers);
  //   });
  //   if (log === true) {
  //     console.log('Row Answers: ');
  //     console.log(masterRowAnswers);
  //   }
  // }
//
//   function getColAnswers(array, log) {
//     for (var i = 0; i < 9; i++) {
//       var thisColAnswers = [];
//       array.forEach(function(row) {
//         if (row[i] != ' ') {
//           thisColAnswers.push(row[i]);
//         }
//       });
//       masterColAnswers.push(thisColAnswers);
//     }
//     if (log === true) {
//       console.log('Column Answers: ');
//       console.log(masterColAnswers);
//     }
//   }
//
//   function getBoxAnswers(array, log) {
//     for (var i = 0; i < 9; i++) {
//       var thisBox = getBox(masterArray, i);
//       masterBoxAnswers.push(thisBox);
//     }
//     if (log === true) {
//       console.log('Box Answers: ');
//       console.log(masterBoxAnswers);
//     }
//   }
//
//   // Which box, 0-8, is a given cell in?
//
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

  // function checkAnswer(array, row, col, value) {
  //   if (value === 0) {
  //     return false;
  //   }
  //   if (array[row].indexOf(value) !== -1) {
  //     return false;
  //   }
  //   for (var i = 0; i < array.length; i++) {
  //     if (array[i][col] === value) {
  //       return false;
  //     }
  //   }
  //   var boxNum = whichBox(row, col, false);
  //   var boxAnswers = getBox(array, boxNum);
  //   if (boxAnswers.indexOf(value) !== -1) {
  //     return false;
  //   }
  //   return true;
  // }
  // function checkAnswer(array, row, col, value) {
  //   if (value === 0) {
  //     return false;
  //   }
  //   if (array[row].indexOf(value) !== -1) {
  //     return false;
  //   }
  //   for (var i = 0; i < array.length; i++) {
  //     if (array[i][col] === value) {
  //       return false;
  //     }
  //   }
  //   var boxNum = whichBox(row, col, false);
  //   var boxAnswers = getBox(array, boxNum);
  //   if (boxAnswers.indexOf(value) !== -1) {
  //     return false;
  //   }
  //   return true;
  // }

  function checkAnswer(array, row, col, value) {
    if (value === 0) {
      return false;
    }
    if (array[row].indexOf(value) !== -1) {
      return false;
    }
    array.forEach(function(value, index) {
      if (array[index][col] === value) {
        return false;
      }
    });
    var boxNum = whichBox(row, col, false);
    var boxAnswers = getBox(array, boxNum);
    if (boxAnswers.indexOf(value) !== -1) {
      return false;
    }
    return true;
  }

//
//   function isAnswered(row, col) {
//     for (var i = 0; i < dupleAnswerArray.length; i++) {
//       if (dupleAnswerArray[i][0] === row && dupleAnswerArray[i][1] === col) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
//
//   function blanksToZeros(array, blanksArray) {
//     var counter = 0;
//     while (counter < blanksArray.length) {
//       row = blanksArray[counter][0];
//       col = blanksArray[counter][1];
//       if (array[row][col] === ' ') {
//         array[row][col] = 0;
//       }
//       counter++;
//     }
//     return array;
//   }
//
//   function reportSolved(ms) {
//     var message = document.getElementById('message');
//     console.log(message.innerHTML);
//     message.innerHTML = 'Solved in ' + ms + 'ms.';
//     message.style.breakStuff('fuckyeah'); // i don't know why this works
//   }
//
  function brutishForce (array) {
    // var puzzle = blanksToZeros(array, dupleUnansweredArray);
    var puzzle = array;
    var blanks = dupleUnansweredArray;
    var row;
    var col;
    var counter = 0;
    var answer;
    while (counter < blanks.length) {
      row = blanks[counter][0];
      col = blanks[counter][1];
      answer = puzzle[row][col];
      // var viewCell = table.rows[row].childNodes[col];
      while (!checkAnswer(puzzle, row, col, answer) && answer <= 9) {
        answer++;
      }
      if (answer > 9) {
        puzzle[row][col] = 0;
        // viewCell.innerHTML = "0"; // write to view
        counter--;
      } else {
        puzzle[row][col] = answer;
        var answerString = answer.toString();
        // viewCell.innerHTML = answerString; // write to view
        // viewCell.style.backgroundColor = 'hsl(180,100%,90%)';
        // viewCell.style.color = 'hsl(0,0%,10%)';
        // drawPuzzle(puzzle);
        counter++;
      }
    }
    drawPuzzle(puzzle);
    var endTime = new Date();
    var totalTime = endTime - startTime;
    // console.log('Solved in: ' + totalTime + 'ms.');
    // reportSolved(totalTime);
  }
//
//   getRowAnswers(masterArray, false);
//
//   getColAnswers(masterArray, false);
//
//   getBoxAnswers(masterArray, false);
//
  brutishForce(masterArray);
//
// }
