// Game Builder
const newGame = (button) => {
  button.style.display = "none";
  const game = document.querySelector(".game-wrapper");
  const columnsArray = [];
  const slotsArray = [];

  // Game 'state' for each slot (will be empty, blue or red)
  let nextColor = "red";

  // Create Column Arrays
  for (let i = 0; i < 7; i++) {
    const column = document.createElement("div");
    column.className = "grid column";
    game.appendChild(column);
    columnsArray.push(column);
  }

  // Class for Creating Slots and Handling Slot Clicks
  class Slot {
    constructor(elementHTML, column, row) {
      this.column = column;
      this.row = row;
      this.elementHTML = elementHTML;
      //
      this.playState = "";
    }

    clicked() {
      const el = this.elementHTML;
      // Checks if clickable
      if (!el.classList.contains("clickable")) return;
      el.style.backgroundColor = nextColor;
      this.playState = nextColor;
      // remove clickable class after click
      el.classList.remove("clickable");
      el.classList.add("clicked");
      // make next element clickable working upwards for bottom
      if (slotsArray[this.column][this.row - 1]) {
        slotsArray[this.column][this.row - 1].elementHTML.classList.add(
          "clickable",
          nextColor
        );
      }

      // Check for Game Over and handle
      if (isDraw(slotsArray) == true) {
        gameOver(nextColor);
      }

      if (isWinner(this.column, this.row, nextColor, slotsArray) == true) {
        gameOver(nextColor);
      }

      // Change player color
      let oldColor = nextColor;

      if (nextColor == "red") {
        nextColor = "blue";
      } else {
        nextColor = "red";
      }

      document.querySelectorAll(".clickable").forEach((el) => {
        el.classList.remove(oldColor);
        el.classList.add(nextColor);
      });
    }
  }

  // Create Slots & Push to Column Array
  columnsArray.forEach((el, col) => {
    let slotColumn = [];
    for (i = 0; i < 6; i++) {
      const divForSlot = document.createElement("div");
      divForSlot.classList.add("slot");
      el.appendChild(divForSlot);
      //
      const slot = new Slot(divForSlot, col, i);
      slotColumn.push(slot);

      // calls clicked() method when div clicked
      divForSlot.onclick = () => slot.clicked();
    }

    slotsArray.push(slotColumn);
  });
  // Assigns clickable class to bottom row of grid & assigns current playState
  slotsArray.forEach((col) => {
    col[5].elementHTML.classList.add("clickable", nextColor);
  });
  console.log(slotsArray);
};

// Functions for Win Decisions

// Check for Draw
const isDraw = (slotsArray) => {
  let isDraw = true;
  slotsArray.forEach((col) => {
    col.forEach((slot) => {
      // if there is empty slot left, can't be a draw
      if (slot.playState == "") isDraw = false;
    });
  });
  return isDraw;
};

// Testing Lines for Winner
const testLines = (lines, color, slotsArray) => {
  //needs four matched colors for win state
  let matchingSlots = 1;
  lines.forEach((line) => {
    for (i = 0; i < line.length; i++) {
      const slotLocation = line[i];
      column = slotLocation[0];
      row = slotLocation[1];
      // Keeps test within grid
      if (slotLocation[0] >= 0 && column <= 6 && row <= 5) {
        if (typeof slotsArray[column][row] !== "undefined") {
          if (slotsArray[column][row].playState == color) {
            matchingSlots += 1;
            console.log(matchingSlots);
          } else break;
        }
      } else break;
    }
  });
  if (matchingSlots >= 4) return true;
  return false;
};

// Check for Winner
const isWinner = (col, row, color, slotsArray) => {
  const winningLines = {
    // To check color of all slots to left and right of row
    horizontal: [
      [
        [col - 1, row],
        [col - 2, row],
        [col - 3, row],
      ],
      [
        [col + 1, row],
        [col + 2, row],
        [col + 3, row],
      ],
    ],
    // Checks down and up the rows
    vertical: [
      [
        [col, row - 1],
        [col, row - 2],
        [col, row - 3],
      ],
      [
        [col, row + 1],
        [col, row + 2],
        [col, row + 3],
      ],
    ],
    // Test diagonal '\' down and up
    // Checks left one col and up one row
    diagonalLeft: [
      [
        [col - 1, row - 1],
        [col - 2, row - 2],
        [col - 3, row - 3],
      ],
      // checks right one col and down one row
      [
        [col + 1, row + 1],
        [col + 2, row + 2],
        [col + 3, row + 3],
      ],
    ],
    // Test diagonal '/' down and up
    diagonalRight: [
      [
        [col - 1, row + 1],
        [col - 2, row + 2],
        [col - 3, row + 3],
      ],
      [
        [col + 1, row - 1],
        [col + 2, row - 2],
        [col + 3, row - 3],
      ],
    ],
  };
  if (testLines(winningLines.horizontal, color, slotsArray) == true)
    return true;

  if (testLines(winningLines.vertical, color, slotsArray) == true) return true;
  if (testLines(winningLines.diagonalLeft, color, slotsArray) == true)
    return true;

  if (testLines(winningLines.diagonalRight, color, slotsArray) == true)
    return true;

  return false;
};

const gameOver = (winner) => {
  console.log("game over");

  setScore(winner);
  // clear slots
  document.querySelectorAll(".column").forEach((column) => {
    column.innerHTML = "";
    column.parentNode.removeChild(column);
  });
  // adds play button back

  document.getElementById("play").style.display = "inherit";
};

const setScore = (winner) => {
  if (winner == "undefined") return;

  document.getElementById(winner + "Score").innerHTML =
    parseInt(document.getElementById(winner + "Score").innerHTML) + 1;
};
