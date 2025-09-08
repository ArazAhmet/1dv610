// Create a div element with class 'board' and append it to the body
const divElement = document.createElement("div");
divElement.className = "board";
divElement.textContent = "";
document.body.appendChild(divElement);

// Create a div element with class 'tile' and append it to the 'board' div
const tile = document.createElement("div");
tile.className = "tile";
tile.textContent = "";
divElement.appendChild(tile);

const rows = 9;
const cols = 12;
let gameBoard = Array.from({ length: rows }, () => Array(cols).fill(0));
let gameWon = false;

// Player switching functionality
let currentPlayer = 1; // 1 for Player 1, 2 for Player 2
const playerColors = ["red", "blue"]; // Player 1: red, Player 2: blue

function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

// Function that checks if there is 4 in a row

function checkForWin(row, col, player) {
  const directions = [
    [0, 1], // Horizontal
    [1, 0], // Vertical
    [1, 1], // Diagonal down-right
    [1, -1], // Diagonal down-left
  ];

  // Check all directions
  for (let [dRow, dCol] of directions) {
    let count = 1;

    let r = row + dRow;
    let c = col + dCol;
    while (
      r >= 0 &&
      r < rows &&
      c >= 0 &&
      c < cols &&
      gameBoard[r][c] === player
    ) {
      count++;
      r += dRow;
      c += dCol;
    }
    // Check in the opposite direction
    r = row - dRow;
    c = col - dCol;
    while (
      r >= 0 &&
      r < rows &&
      c >= 0 &&
      c < cols &&
      gameBoard[r][c] === player
    ) {
      count++;
      r -= dRow;
      c -= dCol;
    }
    // Check if we have 4 in a row
    if (count >= 4) return true;
  }
  return false;
}

// Function to handle tile clicks
function handleTileClick(clickedTile, tileIndex) {
  if (gameWon) return;
  const row = Math.floor(tileIndex / cols);
  const col = tileIndex % cols;

  if (gameBoard[row][col] !== 0) return;
  gameBoard[row][col] = currentPlayer;

  // Change tile color based on current player
  clickedTile.style.backgroundColor = playerColors[currentPlayer - 1];
  clickedTile.style.pointerEvents = "none"; // Disable further clicks on this tile
  if (checkForWin(row, col, currentPlayer)) {
    gameWon = true;
    // Delay the alert to ensure the last move is rendered
    setTimeout(() => {
      alert(`Player ${currentPlayer} wins!`);
    }, 50);
    return;
  }
    // Check for draw
  if (gameBoard.every((row) => row.every((cell) => cell !== 0))) {
    setTimeout(() => {
      alert("It's a draw!");
    }, 50);
    return;
  }

  // Switch to the other player
  switchPlayer();
}

// Add click event to the first tile
tile.addEventListener("click", () => {
  handleTileClick(tile, 0);
});

// Clone the 'tile' div 107 times and append each clone to the 'board' div
for (let i = 0; i < 107; i++) {
  const tileClone = tile.cloneNode(true);
  divElement.appendChild(tileClone);

  // Add click event listener to each cloned tile
  tileClone.addEventListener("click", () => {
    handleTileClick(tileClone, i + 1);
  });
}
