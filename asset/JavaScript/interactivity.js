let playerText = document.getElementById('playerText');
let restartBtn = document.getElementById('restartBtn');
let boxes = Array.from(document.getElementsByClassName('box')); //In JavaScript there is a built in function called array and then a method called from so this basically says create an array from an array like function.
let newGameBtn = document.getElementById('newgameBtn');
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks'); // This is how to use the CSS variable and assign it to a vaiable in javascript.
const O_TEXT = "O";
const X_TEXT = "X";
let playerXScore = 0; 
let playerOScore = 0;
let currentPlayer = X_TEXT;