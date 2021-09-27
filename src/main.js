// Game Board Builder
const newGame = (button) => {
  button.style.display = "none";
  const game = document.querySelector(".game-wrapper");

  const columns = [];
  const slotsArray = [];

  let nextPlayer = "blue";

  for (let i = 0; i < 7; i++) {
    const column = document.createElement("div");
    column.className = "grid column";
    game.appendChild(column);
    columns.push(column);
  }

  class Slot {
    constructor(elementHTML, column, row) {
      this.column = column;
      this.row = row;
      this.elementHTML = elementHTML;
      //
      this.playerMove = "";
    }

    clicked() {}
  }

  // Create Slots & Push to Column Array
  columns.forEach((el, col) => {
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

  console.log(slotsArray);
};

newGame(document.getElementById("play"));
