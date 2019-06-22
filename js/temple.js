// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// Defining Table
// Input: Get Instructions from table rows and cells
// Process: looping structure to process each data row of the table
// Output: Display oldest operating Temple.

function oldestTemple(){
// Input
let table = document.getElementById('templeData');
let name = table.rows[1].cells[0].innerHTML;
let dedYear = parseInt(table.rows[1].cells[1].innerHTML);
// Process
for (let i = 2; i < table.rows.length; i++){
	let templeTest = parseInt(table.rows[i].cells[1].innerHTML);
	if (templeTest < dedYear){
		dedYear = templeTest;
		name = table.rows[i].cells[0].innerHTML;
	}
}
// Output
document.getElementById("output").innerHTML = name;
}