const getSlotsHTML = document.querySelectorAll(".grid__circle");
console.log(getSlotsHTML);

class Game {
  constructor(slot) {
    this.slot = slot;
  }

  // Generates Array for Grid divs and adds unique class names for each
  getSlotArray() {
    const slotArray = Array.from(getSlotsHTML);

    for (let i = 0; i < slotArray.length; i++) {
      slotArray[i].classList.add("slot" + i);
    }
  }

  // Adds "active" class to current clicked div
  handleClick() {
    getSlotsHTML.forEach((slot) => {
      slot.addEventListener("click", () => {
        getSlotsHTML.forEach((slt) => slt.classList.remove("active"));
        slot.classList.add("active");
        console.log(getSlotsHTML);
      });
    });
  }
}
const game = new Game(getSlotsHTML);

game.getSlotArray();
game.handleClick();
