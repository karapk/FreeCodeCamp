const character = "5";
const count = 8;
const rows = [];

//practicing functions
function padRow(name) {
const test = "Testing";
return character + name ;
}
//here when calling padrow the variable name has been replaced with an actual name. It will hence show #CamperChan in the console log
const call = padRow("CamperChan");

//practicing for loops
for (let i = 0; i < count; i = i + 1) {
    rows.push(character);

}

let result = ""

for (const row of rows) {
    result = result + "\n" + row;
    
}


//.length knows length of array
//.push adds element to end of an array. When logged in console it returns the new length of the array
//.pop removes last element from an array and returns that element
