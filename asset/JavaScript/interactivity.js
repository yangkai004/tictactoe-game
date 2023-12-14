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
let spaces = Array(9).fill(null)// This line of code creates an array named spaces with a length of 9, representing the tictactoe grid the fill (null) method is used to initialize all the elements in this array with the value null.
const suiii = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));
} 
function boxClicked(e) { // the parameter is representing the  event but can also be written in any way like evt,et and etc as a parameter but i just chose to put e.
    const id = e.target.id //e: It's a parameter representing an event, like a click, e.target: This refers to the element that triggered the event, in this case, the specific box that was clicked e.target.id: The id property retrieves the unique identifier (ID) of the clicked element. So, const id = e.target.id; is essentially grabbing the ID of the element that was clicked.

    if(!spaces[id]){ // This line is checking if the space in the "spaces" array at the index "id"(which corresponds to the box that was clicked) is empty('null'). the not(!) operator here means "if the space is not already filled".
        spaces[id] = currentPlayer // if the clicked box is indeed empty, this line sets the value in the 'spaces' array at the index 'id' to the symbol of the current player ('X' or 'O'). 
        e.target.innerText = currentPlayer // This line of code accesess the html element and let currentPlayer sets its value of either 'X' or 'O'.