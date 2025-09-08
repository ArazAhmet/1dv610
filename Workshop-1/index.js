// Create a div element with class 'board' and append it to the body
const divElement = document.createElement('div')
divElement.className = 'board'
divElement.textContent = ''
document.body.appendChild(divElement)

// Create a div element with class 'tile' and append it to the 'board' div
const tile = document.createElement('div')
tile.className = 'tile'
tile.textContent = ''
divElement.appendChild(tile)


// Player switching functionality
let currentPlayer = 1 // 1 for Player 1, 2 for Player 2
const playerColors = ['red', 'blue'] // Player 1: red, Player 2: blue

function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1
}

function handleTileClick(clickedTile) {
    // Change tile color based on current player
    clickedTile.style.backgroundColor = playerColors[currentPlayer - 1]
    clickedTile.style.pointerEvents = 'none' // Disable further clicks on this tile
    
    // Switch to the other player
    switchPlayer()
}

// Add click event to the first tile
tile.addEventListener('click', () => {
    handleTileClick(tile);
});


// Clone the 'tile' div 107 times and append each clone to the 'board' div
for (let i = 0; i < 107; i++) {
    const tileClone = tile.cloneNode(true);
    divElement.appendChild(tileClone);

    // Add click event listener to each cloned tile
    tileClone.addEventListener('click', () => {
        handleTileClick(tileClone);
    });
}

