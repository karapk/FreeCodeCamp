const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

//constructors create objects. The're like a regular function but start with capital letter and are initialized by the new operator. 
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

currentDateParagraph.textContent = formattedDate;
const formattedDate = `${day}-${month}-${year}`;
