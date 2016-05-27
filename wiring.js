var inputString = '';
function clientSolve() {
  var message = document.getElementById('message');
  var table = document.getElementById('table');
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
  solve();
}
