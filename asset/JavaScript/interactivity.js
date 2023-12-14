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
        let winning_blocks = playerHasWon(); // created a variable and assaigned it the value of playerHasWon() function
        if(playerHasWon() !==false){
            playerText.innerHTML = `Player ${currentPlayer} has won!` // This sets a message of the player winning at the top where the TicTactoe game was .
            winning_blocks.map( box => boxes[box].style.backgroundColor=winnerIndicator); // This line of code is for highlighting the the winning combo .
            updateScores(currentPlayer); // This is for calling the updateScores function after the game has been won
            boxes.forEach(box => box.removeEventListener('click', boxClicked)); // This is for making no more values to be inserted into the boxes after the game has been won took me a while to figure out.
            return  //When a player wins the function exits early using return statement to prevent further exectution 
        }
        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT // if no player has won yet this line toggles the player to the next players turnfor the next movee it switches from "X" or "O"
    }
}
function updateScores(winning_blocks) { // function is for the scores and making it go up for either if plyer 'X' or 'O' has won  and then increments the score based on the winner.
    if (winning_blocks  === "X") {
        playerXScore++;
        document.getElementById("playerXScore").innerText = playerXScore;
    } else if (winning_blocks === "O") {
        playerOScore++;
        document.getElementById("playerOScore").innerText = playerOScore;
    }
}

const winningCombos = [ // This function is for defining the different possible winning combos.
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const conditional of winningCombos) {
        let [a, b, c] = conditional

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}

restartBtn.addEventListener('click', restartGame); // This for the new round button.
newGameBtn.addEventListener('click', newGame); // This is for the new game button.

function restartGame() { // This function is for starting a new round.
    spaces.fill(null); // This makes all 9 array items to value of null which is empty

    boxes.forEach(box => {
        box.innerText = '';
        box.style.backgroundColor = '';
        box.addEventListener('click', boxClicked); // This is for Re-enabling event listeners for boxes after a new round has started.
    });

    playerText.innerHTML = 'Tic Tac Toe';

}


function newGame() { // This function is for starting a new game. 
    restartGame(); // Resetting the game using the restart function.

    // Resetting scores for a new game
    playerXScore = 0;
    playerOScore = 0;
    document.getElementById("playerXScore").innerText = playerXScore;
    document.getElementById("playerOScore").innerText = playerOScore;
}
suiii() // This function is called after the variables and functions are defined. it sets up the event listners on the boxes, allowing the game to respond when a box is clicked. .startGame() is a trigger to set up process for the game logic and interactivity each time the script runs or the html page is loaded. It is put at the end of the page and called after the boxClicked function and after all the different conditions, functions, iterations and etc have been defined, startGame() contains critical setup functions or event listeners necessary for the game's functionilty calling it at the end of the script ensures that these setup actions are excuted when the page loads or when the script is run.
