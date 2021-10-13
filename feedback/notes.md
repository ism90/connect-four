# Feedback

## Goals

1. A working Game - done

   - 110% It is sick, so many challenging features you have added and have got them to work in the game.
   - Vertical, Horizontal and Diagonal

2. Practice using Git & Github-flow - done

   - 110% 1 Branch, 42 commits

3. Apply what you are learning - done

   - SCSS, BEM , Classes etc.... So much good stuff

## Specification

- PSEUDOCODE - done

  - I can see your Pseudocode.md, Good problem solving / breakdown.

  - Github repo & README.MD - done

  - Repo has been set up perfect
  - Readme is great, I would suggest adding a couple of things.
    - How do you clone it and set it up?
    - the link to the live site?

- 25 Commits - done

- Use click or key press event in JS - done

- Mobile first/Responsive - done

- No tutorials - done

- Link to the project on your portfolio - not sure.

## Overall

This is a great game, lots of difficult things to check consider in breaking the game down. You have used a Class which is awesome and for the game it makes sense. You have a game object which has all of the functionality inside it.

The animations / styles are great. You can see that you have taken everything we have learned so far and put it into this project. Well everything but testing :P.

## To work on

There isn't much more to do, in my opinion these should be things to focus on if you have the time.

### Little things you could change / refactor

1. Move your class definition outside of the `newGame()` function. Normally you keep classes outside of functions so they are accessible if you need them anywhere else. Having it in the function means it is only scoped to that function, generally Classes are reusable so you do not want them scoped.

2. On lines 36 - 37 you could use [`classList.replace()`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/replace)

```js
// 36 - 37
el.classList.replace("clickable", "clicked");
```

3. Remove `== true`, You do not need to check `if(conditon == true)` you can just leave it as `if(conditon)`.

```js
// 47 - 50
if (isDraw(slotsArray)) {
  gameOver(nextColor);
}
```

4. Similarly if a function returns a boolean you do not have to return that it equals true.

```js
// 191 - 201
if (testLines(winningLines.horizontal, color, slotsArray) == true) return true;

if (testLines(winningLines.vertical, color, slotsArray) == true) return true;
if (testLines(winningLines.diagonalLeft, color, slotsArray) == true) return true;

if (testLines(winningLines.diagonalRight, color, slotsArray) == true) return true;

return false;
```

could be

```js
const horizontalWin = testLines(winningLines.horizontal, color, slotsArray);
const verticalWin = testLines(winningLines.vertical, color, slotsArray);
const leftDiagonalWin = testLines(winningLines.diagonalLeft, color, slotsArray);
const rightDiagonalWin = testLines(winningLines.diagonalRight, color, slotsArray);
// if one is true it will return true otherwise it will return false
return horizontalWin || verticalWin || leftDiagonalWin || rightDiagonalWin;
```

### Nested control flow / Readability

I think you should try and simplify some of your logic. Sometimes you have to nest if statements but you should try and avoid this as it becomes more and more unreadable the more you next if statements.

I have simplified the code below.

Your code;

```js
// 110 131
const testLines = (lines, color, slotsArray) => {
  //needs four matched colors for win state
  let matchingSlots = 1;
  lines.forEach(line => {
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
```

Could be

```js
const testLines = (lines, color, slotsArray) => {
  let matchingSlots = 1;
  lines.forEach(line => {
    for (i = 0; i < line.length; i++) {
      const slotLocation = line[i];
      const column = slotLocation[0];
      const row = slotLocation[1];

      const playerMatch = slotsArray[column][row].playState == color;
      const validSlot = typeof slotsArray[column][row] !== "undefined";
      const isOnBoard = slotLocation[0] >= 0 && column <= 6 && row <= 5;

      if (playerMatch && validSlot && isOnBoard) {
        matchingSlots += 1;
        console.log(matchingSlots);
      } else break;
    }
  });

  return matchingSlots >= 4;
};
```

It is very minor but it is something to consider for readability. Instead of three if's you have labelled the check and you check all of them.

Let me know if you want me to explain any of the points from the file.

---
