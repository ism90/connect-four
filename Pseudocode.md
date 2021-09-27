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

- Approach: auto generate html for grid of 'slots'
- Initiate two empty arrays 
  - columnsArray = [];
  - slotsArray = [];
- For loop to push 7 columns of divs to columnArray
- For loop to push 6 rows of slots to columnsArray
- Creating an array of columns with a row array in each column (hopefully)
- Initial state of slots to be set as empty string

#### 2. Player Moves

- players have to be assigned different color
- event listeners for clicks - or onclick val
- for loops(?) for checking array 
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
  - i
  - i
- Draw if no null left in array

#### Extra

- Potential variations on the normal rules - pop out, power up etc
- If time allows, look into MinMax (recursion) for computer moves


#### Notes

PC moves will be dumb - mode for vs CPU and mode for other user?