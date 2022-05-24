# Connect Four!

<em> A browser based game created in HTML, CSS/SCSS and JavaScript for \_nology week 5 </em>

Styled with SCSS and using BEM naming conventions, with a responsive layout and animated disc drops.

[Live Preview](https://ism90.github.io/connect-four/)

## Game Rules

#### Objective:

To be the first player to connect 4 of the same colored discs in a row either vertically, horizontally, or diagonally.

![Connect Four Game ](https://github.com/ism90/js-game/blob/main/assets/readme.png)

---

## About

#### 1. Grid

- The HTML for a grid of 'slots' is generated on game start: a column array is generated, slots are created and handled by a Class, and these slots are 'pushed' to the column array.

```
 // Create Column Arrays
  for (let i = 0; i < 7; i++) {
    const column = document.createElement("div");
    column.className = "grid column";
    game.appendChild(column);
    columnsArray.push(column);
  }

    // Create Slots & Push to Column Array
  columnsArray.forEach((el, col) => {
    let slotColumn = [];
    for (i = 0; i < 6; i++) {
      const divForSlot = document.createElement("div");
      divForSlot.classList.add("slot");
      el.appendChild(divForSlot);
      //
```

#### 2. Player Moves

- A clicked() class method is used for handling slot clicks
- classList manipulation to create the "clickable" slots
- "Clickable" class is removed after slot is played
- The slot becomes "red" or "blue"
- Elements become clickable working upwards for bottom (row - 1) to disable illegal moves

```
    if (slotsArray[this.column][this.row - 1]) {
      slotsArray[this.column][this.row - 1].elementHTML.classList.add(
        "clickable",
        nextColor
      );
```

- Assigns nextColor for next player to alternate moves

#### 3. Win/Draw Conditions

- Tests for 4 consecutive colors, red or blue
- isDraw when there are no empty slots left (no "" in classList)
- Game board is reset on win
