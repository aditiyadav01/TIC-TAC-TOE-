console.log("Tic Tac Toe Game");
const board = document.getElementById("board");
const message = document.getElementById("message");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function checkWinner() {
  for (const [a, b, c] of winPatterns) {
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      message.textContent = `${gameBoard[a]} Wins!`;
      return true;
    }
  }

  if (!gameBoard.includes("")) {
    message.textContent = "It's a Draw!";
    return true;
  }

  return false;
}

function handleClick(event) {
  const index = event.target.dataset.index;
  if (gameBoard[index] || message.textContent) return;

  gameBoard[index] = currentPlayer;
  event.target.textContent = currentPlayer;
  event.target.classList.add("taken");

  if (checkWinner()) {
    board.childNodes.forEach(cell => cell.classList.add("taken"));
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function createBoard() {
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    fragment.appendChild(cell);
  }
  
  board.appendChild(fragment);
  board.addEventListener("click", handleClick);
}

createBoard();
