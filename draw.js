import masterArray from './prepare.js';

function drawPuzzle(array) {
  var rowBorder = ' ---+---+---+---+---+---+---+---+--- ';
  for (var i = 0; i < 9; i++) {
    console.log(rowBorder);
    console.log('| ' + array[i].join(' | ') + ' |');
  }
  console.log(rowBorder);
}

module.exports = 'draw';