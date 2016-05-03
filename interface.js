var table = document.getElementById('table');
for (var row = 0; row < 9; row++) {
  var tr = document.createElement('tr');
  table.appendChild(tr);
  for (var col = 0; col < 9; col++) {
    var td = document.createElement('td');
    td.cell = [row, col];
    td.setAttribute('contenteditable', 'true');
    td.innerHTML = '0';
    tr.appendChild(td);
    td.addEventListener('keydown', function(event) {
      event.preventDefault();
      var keyCode = event.which;
      var num = keyCode - 48;
      if (num >= 1 && num <= 9) {
        this.innerHTML = num.toString(); // replaced deprecated fontcolor() with this.style.color
        this.style.color = 'hsla(0,0%,10%,1)';
        this.style.backgroundColor = "hsl(180,100%,90%)";
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
        } else {
          // TODO: error message
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
      } else {
        // TODO: error message
      }
    });
  }
}
