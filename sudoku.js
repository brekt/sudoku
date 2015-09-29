import masterString from './global.js';
import prepare from './prepare.js';
import draw from './draw.js';
import possible from './possible.js';
import get from './get.js';
import deduce from './deduce.js';

draw.drawPuzzle(masterArray);

// var possible = possible.findPossibilities(masterArray);

deduce.countAnswers(masterArray);

get.getAllRows();

get.getAllCols();

get.getAllBoxes();

// rowDeduction();