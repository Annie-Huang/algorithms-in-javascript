// It means, e.g. no matter how many ropes you put, your value is only 1500.
const rope = {value: 1500, weight: 1};
const food = {value: 2000, weight: 3};
const tent = {value: 3000, weight: 4};
const iphone = {value: 2000, weight: 1};

// const constraint = 4;

/*
        1       2       3       4
Rope   1500    1500    1500    1500
Tent   1500    1500    1500    3000
Food   1500    1500    2000    3500

Iphone 2000    3500    3500    4000
 */

const constraint = [1,2,3,4];
// const items = [rope,tent,food];
const items = [rope,tent,food,iphone];

// Create an empty grid.
function createGrid() {
    let newGrid = [];
    for(let row = 0; row < items.length; row++) {
        newGrid[row] = [];
        for(let col = 0; col < constraint.length; col++) {
            newGrid[row][col] = 0;
        }
    }
    return newGrid;
}

function fillInGrid(grid) {
    for(let row in items) {
        for(let col in constraint) {
            let {value, weight} = items[row];
            console.log('value=', value, ' weight=', weight);

            // Step1: Use for the first time to fill all column, after the first time, it will show:
            // [
            //    [ 1500, 1500, 1500, 1500 ],
            //    [ 0, 0, 0, 0 ],
            //    [ 0, 0, 0, 0 ],
            //    [ 0, 0, 0, 0 ]
            // ]
            if(grid[row-1] === undefined) {
                grid[row][col] = value;
                continue; // continue the forloop, skip the rest...
            }


            // Step2 Use for the first row to fill through the second row, after it run with the first step, it will show:
            // [
            //    [ 1500, 1500, 1500, 1500 ],
            //    [ 1500, 1500, 1500, 0 ],
            //    [ 0, 0, 0, 0 ],
            //    [ 0, 0, 0, 0 ]
            // ]
            let prevRowSameCol = grid[row-1][col];
            if(weight > constraint[col]) {
                grid[row][col] = prevRowSameCol;
                continue;
            }

            // Step3 after it run with the 1st and 2nd step, it will show:
            // [
            //    [ 1500, 1500, 1500, 1500 ],
            //    [ 1500, 1500, 1500, 3000 ],
            //    [ 1500, 1500, 2000, 0 ],
            //    [ 0, 0, 0, 0 ]
            // ]
            if(weight === constraint[col]) {
                grid[row][col] = prevRowSameCol > value ? prevRowSameCol : value;
                continue;
            }


            // Step4 after it run with the 1st and 2nd and 3rd step, it will show:
            // [
            //    [ 1500, 1500, 1500, 1500 ],
            //    [ 1500, 1500, 1500, 3000 ],
            //    [ 1500, 1500, 2000, 3500 ],
            //    [ 0, 0, 0, 0 ]
            // ]
            let diff = constraint[col-1] - weight;
            console.log('constraint[col-1]=', constraint[col-1], ' weight=', weight, ' diff=', diff);
            console.log('value=', value, ' grid[row-1][diff]=', grid[row-1][diff]);
            grid[row][col] = prevRowSameCol > value + grid[row-1][diff] ? prevRowSameCol : value + grid[row-1][diff];
        }
    }
    return grid;
}


const matrix = createGrid();
console.log(matrix);
console.log(fillInGrid(matrix));

// Can the value of a column ever go down?
// - No. At every iteration, we're restoring the current max value. The value can never get worse than it was before.
// Can we change the order of items?
// - Each column row would be different, except for that last row, which shows us the max. Remember, we need to go back and iron out that first item logic.
// Dynamic program only work if each sub-problem doesn't not depend on each sub-problems.
// Big O notation? O(2^n)

// My thought? I cannot see that I will ever use this, honestly.....
