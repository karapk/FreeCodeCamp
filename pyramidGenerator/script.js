const character = "#";
const count = 8;
const rows = [];

//practicing functions
function padRow(rowNumber, rowCount) {
 return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber -1) + " ".repeat(rowCount - rowNumber);
}

//practicing for loops
for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i +1, count));

}



let result = ""

for (const row of rows) {
    result = result + "\n" + row;
    
}
console.log(result);

//.length knows length of array
//.push adds element to end of an array. When logged in console it returns the new length of the array
//.pop removes last element from an array and returns that element
