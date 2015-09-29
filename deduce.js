import masterString from './global.js';

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

function rowDeduction(row) {
  var rowAnswers = getRow(masterArray, 1)
  console.log('rowAnswers: ' + rowAnswers);
  var rowPossible = whatsPossible()
}

module.exports = 'deduce';