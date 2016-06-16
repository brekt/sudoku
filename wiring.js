// these functions use table and message, which are defined as global consts


// this function sends the user input to the solver algorithm when user clicks solve

function clientSolve() {
  var inputString = '';
  message.innerHTML = 'Solving';
  message.className = 'ellipse';
  table.className = 'flip';
  var rows = table.rows;
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i].childNodes;
    for (var j = 0; j < row.length; j++) {
      var cell = row[j];
      var cellValue = cell.innerHTML;
      inputString += cellValue;
    }
  }
  setTimeout(function() {
    var startTime = new Date();
    var masterArray = inputString.split('');
    masterArray = make2dArray(masterArray);
    var endTime = brutishForce(masterArray);
    var totalTime = endTime - startTime;
    // console.log('Solved in: ' + totalTime + 'ms.');
    reportSolved(totalTime);
  }, 500);
}

// this function checks the user input as they enter it to see if they break a rule

function clientCheckAnswer(inputRow, inputCol, inputValue) {
  var inputString = '';
  var rows = table.rows;
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i].childNodes;
    for (var j = 0; j < row.length; j++) {
      var cell = row[j];
      var cellValue = cell.innerHTML;
      inputString += cellValue;
    }
  }
  var inputArray = inputString.split('');
  var client2dArray = make2dArray(inputArray);
  if (!checkAnswer(client2dArray, inputRow, inputCol, inputValue)) {
    message.innerHTML = 'Sorry, a ' + inputValue + ' in that cell breaks a rule.'
    return false;
  }
  return true;
}

// this function resets the board

function resetBoard() {
  var rows = table.rows;
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i].childNodes;
    for (var j = 0; j < row.length; j++) {
      var cell = row[j];
      cell.innerHTML = "0";
      cell.style.color = "white";
      cell.style.backgroundColor = "white";
    }
  };
  message.className = ''; // reset class to stop ellipse animation.
  table.className = ''; // reset class to stop flip animation.
  message.innerHTML = "Enter a puzzle and click 'Solve' to see the solution.";
}
