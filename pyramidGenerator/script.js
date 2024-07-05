const character = "#";
const count = 8;
const rows = [];

//practicing functions
function padRow(rowNumber, rowCount) {
 return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber -1) + " ".repeat(rowCount - rowNumber);
}

//practicing for loops
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(padRow(i +1, count));

// }

//making code cleaner by using addition assignment operator shorthand
// for (let i = 0; i < count; i += 1) {
//     rows.push(padRow(i +1, count));

// }

/*using the increment operator ++ for the same code to make it even more shorthand
Changed i to start at one hence didn't need to do i+1
since we lost a row while starting at 1 an <= operator has been added to fix this*/
// for (let i = 1; i <= count; i ++) {
//     rows.push(padRow(i, count));

// }

//using for loop to creat upside down pyramid
for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
}

//using a while loop
// let done = 0;

// while (done !== count) {
//     done++
//     rows.push(padRow(done, count));
// }
//changing if done is less than or equal to count
// while (done <= count) {
//     done++
//     rows.push(padRow(done, count));
// }

// while (rows.length < count) {
//     rows.push(padRow(rows.length+1, count));
// }


let result = ""

for (const row of rows) {
    result = result + "\n" + row;
    
}
console.log(result);

//.length knows length of array
//.push adds element to end of an array. When logged in console it returns the new length of the array
//.pop removes last element from an array and returns that element
