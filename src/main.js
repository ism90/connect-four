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
      //make next element clickable working upwards for bottom
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

// Check for Winner
const isWinner = (slotsArray) => {};

const gameOver = (winner) => {
  console.log("game over")
  setScore(winner);
};

const setScore = (winner) => {
  if (winner == "undefined") return;
};

newGame(document.getElementById("play"));
