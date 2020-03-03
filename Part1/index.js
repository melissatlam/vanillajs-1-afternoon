const board = [];
let isThereWinner = false;

function play(clickedId) {
  //clickedId = 2
  // get the current player, X or O
  // <span id="player">X</span>
  // <div id='player'>X</div>

  const playerSpan = document.getElementById("player"); // X

  // what is the current box we just clicked?
  // since in the HTML, we are passing in a number 0-9, we'll keep track of that
  // in the const board = [] created above later
  const clickedElement = document.getElementById(clickedId); // 2

  if (!isThereWinner && board[clickedId] === undefined) {
    if (playerSpan.innerText === "X") {
      // if the current player is X, want to change the next user to O
      playerSpan.innerText = "O";
      // innerText adds text in any div element.
      clickedElement.innerText = "X";
      // start to create the array of user inputs. later we can use this array to check if any user has won
      board[clickedId] = "X";
    } else {
      playerSpan.innerText = "X";
      clickedElement.innerText = "O";
      board[clickedId] = "O";
    }
    console.log(board);

    // these are all variables to show what boxes you will be comparing that will execute a winner

    const topLeft = board[0]; // X
    const topCenter = board[1]; // X
    const topRight = board[2];
    //X;
    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomCenter = board[7];
    const bottomRight = board[8];

    // you know that user wins if all their X's is on top row which means board[0], board[1], board[2] must have X and etc.
    if (
      topLeft !== undefined &&
      topLeft === topCenter &&
      topLeft === topRight
    ) {
      alert(`${topLeft} is the winner`);
      resetGame();
      return;
    }
    // this is the check for the middle row, which is board[3], board[4], board[5]
    if (
      middleLeft !== undefined &&
      middleLeft === middleCenter &&
      middleLeft === middleRight
    ) {
      alert(`${middleLeft} is the winner`);
      isThereWinner = true;
      resetGame();
      return;
    }
    // check for bottom row
    if (
      bottomLeft !== undefined &&
      bottomLeft === bottomCenter &&
      bottomLeft === bottomRight
    ) {
      alert(`${bottomLeft} is the winner`);
      isThereWinner = true;
      resetGame();
      return;
    }
    // now we go into the columns. this would check the first column for winners
    if (
      topLeft !== undefined &&
      topLeft === middleLeft &&
      topLeft === bottomLeft
    ) {
      alert(`${topLeft} is the winner`);
      isThereWinner = true;
      resetGame();
      return;
    }
    // middle column
    if (
      topCenter !== undefined &&
      topCenter === middleCenter &&
      topCenter === bottomCenter
    ) {
      alert(`${topCenter} is the winner`);
      resetGame();
      return;
    }
    // right most column
    if (
      topRight !== undefined &&
      topRight === middleRight &&
      topRight === bottomRight
    ) {
      alert(`${topRight} is the winner`);
      resetGame();
      return;
    }
    // now we go into diagonals. this would be from top left to borrom right
    if (
      topLeft !== undefined &&
      topLeft === middleCenter &&
      topLeft === bottomRight
    ) {
      alert(`${topLeft} is the winner`);
      resetGame();
      return;
    }
    if (
      bottomLeft !== undefined &&
      bottomLeft === middleCenter &&
      bottomLeft === topRight
    ) {
      alert(`${bottomLeft} is the winner`);
      resetGame();
      return;
    }

    // what if the board is full? we cannot have another user click a box. so we have to check
    let boardFull = true; // true or false
    // go through all the 9 boxes and see. if board[i] is undefined it means user hasn't clicked this box yet. so box is not full and set to false
    for (let i = 0; i <= 8; i++) {
      if (board[i] === undefined) {
        boardFull = false;
      }
    }
    if (boardFull === true) {
      alert("Cat's game, there is no winner");
    }
    // there is already an X or O in there.
  }
}

// Create a function that resets the board after each game. This function should be called after the winner is revealed
function resetGame() {
  // when you reset the game, you want to clear all of the boxes. so to do that, how do we access them?
  // find the element by className (document.getElementsByClassName) so that we can get an array of elements to loop through
  // since there is not className, lets create one in the HTML
  var boxes = document.getElementsByClassName("box"); //getElementsByClassName is an Array
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerText = "";
  }
}
