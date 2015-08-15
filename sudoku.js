var masterString = '...28.94.1.4...7......156.....8..57.4.......8.68..9.....196......5...8.3.43.28...';
var masterArray = masterString.split('');
var answersArray = [];
var allPossible = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var possibilitiesArray = [];

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

drawPuzzle(masterArray);

// Get possibilites with basic deduction.

function findPossibilites(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] != ' ') {
        var answer = [array[i][j]];
        array[i][j] = [array[i][j]];
        possibilitiesArray.push(answer);
      }
      else {
        array[i][j] = [array[i][j]];
        possibilitiesArray.push(allPossible);
      }
    }
  }
  console.log(possibilitiesArray);
  console.log('Length of possibilites array: ' + possibilitiesArray.length);
  return possibilitiesArray;
}

// Eliminate possibilites by deduction using answers in row.

function gatherAnswers(array) {
  var answerCount = 0;
  var unansweredCount = 0;
  for (var i = 0; i < array.length; i++) {
    var rowAnswers = [];
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] != ' ') {
        var answer = array[i][j][0];
        rowAnswers.push(answer);
        answerCount++;
      }
      else {
        unansweredCount++;
      }
    }
  }
  console.log('Number of answers: ' + answerCount);
  console.log('Number of unanswered: ' + unansweredCount);
  return array;
}

possibilitiesArray = findPossibilites(masterArray);

answersArray = gatherAnswers(masterArray);

