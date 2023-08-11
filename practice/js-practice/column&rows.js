const ROWS = 4;
const COLUMNS = 6;

const scores = new Array(ROWS);

for(let index = 0; index < ROWS; index++){
    scores[index] = new Array(COLUMNS);

}

let rowIndex  ;
let colIndex;
for(rowIndex = 0; rowIndex < ROWS; rowIndex++){
    console.log("Row # " + (rowIndex + 1) + ":")
 
    for(colIndex = 0; colIndex < COLUMNS; colIndex++){
        console.log(scores[rowIndex][colIndex] + "")
    }
}