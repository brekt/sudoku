// app.js for sudoku solver

const express = require('express');
const app = express();
const sudokuPort = process.env.SUDOKU_PORT || 3000;

app.use(express.static('public'));


app.get('/', function(req, res) {
  res.send('Hello world.');
});

app.listen(sudokuPort, function() {
  console.log('Express app listening on port ' + sudokuPort);
});
