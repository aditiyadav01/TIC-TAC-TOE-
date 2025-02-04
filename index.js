console.log("Tic Tac Toe Game");
const board = document.getElementById("board");
const message = document.getElementById("message");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      message.textContent = `${gameBoard[a]} Wins!`;
      board.childNodes.forEach(cell => cell.classList.add("taken"));
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
  if (gameBoard[index] !== "" || message.textContent) return;
  
  gameBoard[index] = currentPlayer;
  event.target.textContent = currentPlayer;
  event.target.classList.add("taken");
  
  if (!checkWinner()) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function createBoard() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", handleClick);
    board.appendChild(cell);
  }
}

createBoard();