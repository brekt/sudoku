import masterString from './global.js';

var splitArray = masterString.split('');
var allPossible = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

var numberArray = stringsToNums(spacesArray);

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

export const masterArray = make2dArray(numberArray);

module.exports = 'prepare';