const getSlotsHTML = document.querySelectorAll(".grid__circle");
console.log(getSlotsHTML);

class Game {
  constructor(slot) {
    this.slot = slot;
  }

  getSlotArray() {
    const slotArray = Array.from(getSlotsHTML);

    for (let i = 0; i < slotArray.length; i++) {
      slotArray[i].classList.add("slot" + i);
    }
  }
}

const game = new Game(getSlotsHTML);

game.getSlotArray();
