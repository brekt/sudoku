var table = document.getElementById('table');
var message = document.getElementById('message');
var solveButton = document.getElementById('solve-button');
for (var row = 0; row < 9; row++) {
  var tr = document.createElement('tr');
  table.appendChild(tr);
  for (var col = 0; col < 9; col++) {
    var td = document.createElement('td');
    td.cell = [row, col];
    td.setAttribute('contenteditable', 'true');
    td.innerHTML = '0';
    tr.appendChild(td);
    var keyCodes = [];
    td.addEventListener('keydown', function(event) {
      event.preventDefault();
      var keyCode = event.which;
      keyCodes.push(keyCode);
      var num = keyCode - 48;
      if (num >= 1 && num <= 9) {
        this.innerHTML = num.toString();
        this.style.color = 'hsl(0,0%,10%)';
        this.style.backgroundColor = 'hsl(180,100%,90%)';
        if (this.cell[1] < 8) {
          this.nextSibling.focus();
        } else {
          this.parentNode.nextSibling.firstChild.focus();
        }
      } else if (!event.shiftKey && (keyCode === 9 || keyCode === 39)) { // tab or right arrow
        if (this.cell[1] < 8) {
          this.nextSibling.focus();
        } else  if (this.cell[0] < 8) {
          this.parentNode.nextSibling.firstChild.focus();
        }
      } else if (keyCode === 37 || (event.shiftKey && keyCode === 9)) { // left arrow or shift+tab
        if (this.cell[1] > 0) {
          this.previousSibling.focus();
        } else {
          this.parentNode.previousSibling.lastChild.focus();
        }
      } else if (this.cell[0] !== 0 && keyCode === 38) { // up arrow
        this.parentNode.previousSibling.childNodes[this.cell[1]].focus();
      } else if (this.cell[0] !== 8 && keyCode === 40) { // down arrow
        this.parentNode.nextSibling.childNodes[this.cell[1]].focus();
      } else if (keyCode === 46) { // delete
        this.innerHTML = '0';
        this.style.color = 'white';
        this.style.backgroundColor = 'white';
      } else if (keyCode === 8) { // backspace
        this.innerHTML = '0';
        this.style.color = 'white';
        this.style.backgroundColor = 'white';
        if (this.cell[1] > 0) {
          this.previousSibling.focus();
        } else {
          this.parentNode.previousSibling.lastChild.focus();
        }
      } else if (keyCode === 32) { // space bar
        this.innerHTML = '0';
        this.style.color = 'white';
        this.style.backgroundColor = 'white';
        if (this.cell[1] < 8) {
          this.nextSibling.focus();
        } else  if (this.cell[0] < 8) {
          this.parentNode.nextSibling.firstChild.focus();
        }
      } else if (keyCodes.indexOf(82) !== -1 && (keyCodes.indexOf(17) !== -1 || keyCodes.indexOf(224) !== -1 || keyCodes.indexOf(91) !== -1 || keyCodes.indexOf(93) !== -1)) { // custom command-r refresh
        document.location.reload();
      }
    });
    td.addEventListener('keyup', function() {
      keyCodes = [];
    });
    td.addEventListener('focus', function() {
      if (this.innerHTML === '0') {
        this.style.backgroundColor = 'hsl(60, 100%, 90%)';
        this.style.color = 'hsl(60, 100%, 90%)';
      } else {
        this.style.backgroundColor = 'hsl(60, 100%, 90%)';
        this.style.color = 'hsl(60,0%,10%)';
      }
    });
    td.addEventListener('blur', function() {
      if (this.innerHTML === '0') {
        this.style.backgroundColor = 'white';
        this.style.color = 'white';
      } else {
        this.style.backgroundColor = 'hsl(180,100%,90%)';
        this.style.color = 'hsl(0,0%,10%)';
      }
    });
  }
}

function styleCell() {
  // potentially put all styling in here so can be called after event
}

solveButton.addEventListener('click', function(event) {
  clientSolve();
});
