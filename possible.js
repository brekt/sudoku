import masterString from './global.js';


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
    }
    possibilitiesArray.push(row);
  }
  console.log('Possibilities array: ');
  console.log(possibilitiesArray);
  console.log('Length of possibilites array: ' + possibilitiesArray.length);
  return possibilitiesArray;
}

function whatsPossible(row, col) {
  var rowIndex = row - 1;
  var colIndex = col - 1;
  console.log('Row ' + row + ', Col ' + col + ' possibilities: ' + possible[rowIndex][colIndex]);
}

module.exports = 'possible';