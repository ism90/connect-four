## Pseudocode for JS Game Challenge

### Connect Four!

#### OBJECTIVE:

To be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally)

#### HOW TO PLAY:

- First, decide who goes first and what color each player will have.
- Players must alternate turns, and only one disc can be dropped in each turn.
- On your turn, drop one of your colored discs from the top into any of the seven slots.
- The game ends when there is a 4-in-a-row or a stalemate.
- The starter of the previous game goes second on the next game.

---

#### 1. Grid

- 2d empty array for game begin state
- 6 rows 7 columns
- 42 potential moves 
- gridArray = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],

- possible Array.values() = null, red or blue
-

#### 2. Player Moves

- random 50/50 flip for first or second
- players have to be assigned different color
- event listeners for clicks - or onclick val
- for loops for checking array 
- move has to be valid
   - can't overwrite a red or blue value
   - can only make move on bottom of grid
   - alert if player makes invalid move
- 'drop' the move -> has to fill array from <b>bottom up</b> in unpopulated area
- populate array with move
- player one move is over 
- Then 'player 2' moves - same conditions. 

#### 3. Win/Draw Conditions

- Check Horizontal/Vertical/Diagonal for four reds || four blues
- Draw if no null left in array

#### Extra

- Potential variations on the normal rules - pop out, power up etc
