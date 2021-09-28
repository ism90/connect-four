## Pseudocode for JS Game Challenge

### Connect Four!


---

#### 1. Grid

- Approach: auto generate html for grid of 'slots'
- Initiate two empty arrays 
  - columnsArray = [];
  - slotsArray = [];
- For loop to push 7 columns of divs to columnArray

- Creating an array of columns with a row array in each column (hopefully)
- Initial state of slots to be set as empty string

#### 2. Player Moves

- Class for Creating Slots
  - For loop to push 6 rows of slots to columnsArray
- clicked() class method for handling slot clicks
  - classList manipulation to create "clickable" slots
  - remove clickable class after click
  - "red" or "blue"
  - make next element clickable working upwards for bottom (row - 1)
  - assign newColor for next player



#### 3. Win/Draw Conditions

- Test Lines for Winner
- Tests for 4 consecutive colors red or blue
- isDraw when there are no empty slots left (no "" in classList)



#### Extra

- Potential variations on the normal rules - pop out, power up etc
- If time allows, look into MinMax (recursion) for computer moves


#### Notes
