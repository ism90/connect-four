// Game Builder
const newGame = (button) => {
  button.style.display = "none";
  const game = document.querySelector(".game-wrapper");
  const columnsArray = [];
  const slotsArray = [];

  // Game 'state' for each slot (will be empty, blue or red)
  let playerColor = "blue";

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
      el.style.backgroundColor = playerColor;
      this.playState = playerColor;
      //make next element clickable working upwards for bottom
      if (slotsArray[this.column][this.row - 1]) {
        slotsArray[this.column][this.row - 1].elementHTML.classList.add(
          "clickable",
          playerColor
        );
      }
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
      //
      divForSlot.onclick = function () {
        slot.clicked();
      };
    }
    slotsArray.push(slotColumn);
  });
  // Assigns clickable class to bottom row of grid & assigns current playState
  slotsArray.forEach((col) => {
    col[5].elementHTML.classList.add("clickable", playerColor);
  });
  console.log(slotsArray);
};

// Functions for Win Decisions

// Check for Draw
const isDraw = (slotsArray) => {};

// Check for Winner
const isWinner = (slotsArray) => {};

const gameOver = (winner) => {};

const setScore = (winner) => {};

newGame(document.getElementById("play"));
