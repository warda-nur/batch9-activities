//ELEMENTS//

const selectBox = document.querySelector(".select-box");
const selectBtnX = selectBox.querySelector(".options .playerX");
const selectBtnO = selectBox.querySelector(".options .playerO");
const playBoard = document.querySelector(".play-board ");
const playerDisplay = document.querySelector("#playerDisplay");
const tiles = document.querySelectorAll(".tile");
const previousBtn = document.querySelector("#previousBtn");
const nextBtn = document.querySelector("#nextBtn");
const resetBtn = document.querySelector("#resetBtn");
const modalContainer = document.querySelector(".modal-bg");
const modalHeader = document.querySelector("#modal-header");
const modalText = document.querySelector("#modal-text");
const newGameBtn = document.querySelector("#newBtn");
const gameHistoryBtn = document.querySelector("#historyBtn");

//modal slect player/
window.onload = () => {
  selectBtnX.onclick = () => {
    selectBox.classList.add("hide"); //hide select box
    playBoard.classList.add("show"); //show the playboard section
  };
};

selectBtnO.onclick = () => {
  selectBox.classList.add("hide");
  playBoard.classList.add("show");
};

//VARIABLES//
let xTurn = true;
let occupiedCells = 0;
let boardArray = [];
let previousMoveArray = [];

//EVENT LISTENERS//
for (let tile of tiles) {
  tile.addEventListener("click", play);
  tile.addEventListener("mouseenter", hover);
  tile.addEventListener("mousedown", (e) => {
    e.target.textContent = "";
  });
  tile.addEventListener("mouseout", (e) => {
    e.target.textContent = "";
  });
}

//modal buttons//
newGameBtn.addEventListener("click", reset);

gameHistoryBtn.addEventListener("click", () => {
  previousBtn.style.visibility = "visible";
  modalContainer.style.display = "none";
});

//previous button//
previousBtn.addEventListener("click", () => {
  nextBtn.style.visibility = "visible";
  if (boardArray.length != 0) {
    let lastMove = boardArray[boardArray.length - 1]; //move object
    let targetCell = tiles[parseInt(lastMove.tile)];
    targetCell.classList.remove(targetCell.classList[2]);
    previousMoveArray.push(lastMove);
    boardArray.pop();
    console.log(lastMove);
  } else {
    previousBtn.style.visibility = "hidden";
  }
});

//next button//
nextBtn.addEventListener("click", () => {
  previousBtn.style.visibility = "visible";
  if (previousMoveArray.length != 0) {
    let lastMove = previousMoveArray[previousMoveArray.length - 1]; //moveObject
    let targetCell = tiles[parseInt(lastMove.tile)];
    let lastPlayer = lastMove.player;
    targetCell.classList.add(lastPlayer);
    boardArray.push(lastMove);
    previousMoveArray.pop();
    console.log(lastMove);
  } else {
    nextBtn.style.visibility = "hidden";
    previousBtn.style.visibility = "visible";
  }
});

//reset button//
resetBtn.addEventListener("click", reset);

//FUNCTIONS//

function play(e) {
  //know wich tile was clicked//
  const target = e.target;
  const classList = target.classList;
  const tile = classList[1];
  const player = classList[2];
  target.removeEventListener("mouseenter", hover);
  //if class already contains x or o//
  if (player === "X" || player === "O") {
    return;
  }
  // if x's turn//
  else if (xTurn) {
    //display x in tile//
    classList.add("X");
    saveMove(tile, "X");
    //change turn indicator to o's turn//
    updatePlayer("O");
    //x turn ends//
    xTurn = !xTurn;
    occupiedCells++;
    //if o's turn//
  } else {
    //display o in tile//
    classList.add("O");
    saveMove(tile, "O");
    updatePlayer("X");
    //back to x turn//
    xTurn = !xTurn;
    occupiedCells++;
  }
  //check if any player has won the game//
  isWinner();
}

//stores each move in move object//
function saveMove(tile, player) {
  let moveObject = {};
  moveObject.tile = tile;
  moveObject.player = player;
  //add move to board//
  boardArray.push(moveObject);
}

//changes turn indicator to player's turn//
function updatePlayer(player) {
  playerDisplay.textContent = `${player}'s Move`;
}

//check if a player has won//
function isWinner() {
  //store player if x or o or undefined//
  const tile0 = tiles[0].classList[2];
  const tile1 = tiles[1].classList[2];
  const tile2 = tiles[2].classList[2];
  const tile3 = tiles[3].classList[2];
  const tile4 = tiles[4].classList[2];
  const tile5 = tiles[5].classList[2];
  const tile6 = tiles[6].classList[2];
  const tile7 = tiles[7].classList[2];
  const tile8 = tiles[8].classList[2];

  const winningConditions = [
    //all three tiles in any row are the same//
    [tile0, tile1, tile2],
    [tile3, tile4, tile5],
    [tile6, tile7, tile8],
    //all three tiles in any column are the same//
    [tile0, tile3, tile6],
    [tile1, tile4, tile7],
    [tile2, tile5, tile8],
    //all three tiles diagonally are the same//
    [tile0, tile4, tile8],
    [tile2, tile4, tile6],
  ];

  //check if any winning condition is fulfilled//
  winningConditions.some((tile) => {
    if (tile[0] && tile[0] === tile[1] && tile[0] === tile[2]) {
      playerDisplay.textContent = `Player ${tile[0]} won!`;
      modalHeader.textContent = "";
      modalText.textContent = `Player ${tile[0]} won`;
      isGameOver(true);
      //display previous button//
      return tile;
    } else {
      isDraw();
    }
  });
}

//checks if game is a draw and all tiles are occupied and no winning combination//
function isDraw() {
  if (occupiedCells === 9 && !isGameOver()) {
    playerDisplay.textContent = "IT'S A TIE!";
    modalHeader.textContent = "IT'S A TIE!";
    modalText.textContent = "";

    isGameOver(true);
  }
}

//if game is over, disable event listener on each tile//
function isGameOver(status) {
  if (!status) {
    for (let tile of tiles) {
      tile.addEventListener("click", play);
      tile.addEventListener("mouseenter", hover);
    }
  } else {
    for (let tile of tiles) {
      tile.removeEventListener("click", play);
      tile.removeEventListener("mouseenter", hover);
    }
    modalContainer.style.display = "flex";
  }

  console.log("Board Array:");
  console.log(boardArray);
}

function hover(e) {
  if (xTurn) {
    e.target.textContent = "X";
    e.target.style.color = "var(--x-hover)";
  } else {
    e.target.textContent = "O";
    e.target.style.color = "var(--o-hover)";
  }
}

function reset() {
  // clear all Xs and Os//
  for (let tile of tiles) {
    let classList = tile.classList;
    if ((classList.length = 3)) {
      classList.remove(classList[2]);
    } else {
      return;
    }
  }
  //start with x turn again//
  xTurn = true;
  updatePlayer("X");
  //remove previous and next buttons//
  previousBtn.style.visibility = "hidden";
  nextBtn.style.visibility = "hidden";
  isGameOver(false);
  occupiedCells = 0;
  boardArray = [];
  previousMoveArray = [];
  console.clear();
  modalText.textContent = "";
  modalContainer.style.display = "none";
}
