// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/* Defining Table
Compute the volume of a cylinder in liters. Ask for the appropriate inputs and output the total volume to the screen. Your program should correctly handle real numbers (numbers with decimals).

INPUT: Get height of the cylinder (h) and the radius (r) in meters
PROCESSING: volume of a cylinder V = π r2 h
OUTPUT: Display volume cubic units
*/
function GetVolume () {
	//INPUT
	let r = parseFloat(document.getElementById('r').value);
	let h = parseFloat(document.getElementById('h').value);
	//PROCESSING
	let volume = ((Math.PI *  Math.pow(r, 2)) * h);
	//OUTPUT
	document.getElementById('output').innerHTML = "The volume is " + volume;
}