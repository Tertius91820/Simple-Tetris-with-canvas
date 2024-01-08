class Board {
  // reset the board when we start the game
  reset() {
    this.grid = this.getEmtyBoard();
  }

  // Get matrix filled with zeros
  getEmtyBoard() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }
}
