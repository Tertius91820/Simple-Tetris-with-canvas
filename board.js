class Board {
  // reset the board when we start the game
  reset() {
    this.grid = this.getEmtyBoard();
  }

  // Get matrix filled with zeros
  getEmtyBoard() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }

  //setting the play area
  valid(p) {
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx;
        let y = p.y + dy;
        return this.insideWalls(x) && this.aboveFloor(y);
      });
    });
  }

  insideWalls(x) {
    return x >= 0 && x < COLS;
  }

  aboveFloor(y) {
    return y <= ROWS;
  }

  rotate(p) {
    let clone = JSON.parse(JSON.stringify(p));
    for (let y = 0; y < p.shape.length; y++) {
      for (let x = 0; x < y; x++) {
        [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];
      }
    }
    //reverse the order of the columns
    p.shape.forEach((row) => row.reverse());
    return clone;
  }
}
