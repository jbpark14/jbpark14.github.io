// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;


/*Defining Table
INPUT: Get radius and height from input boxes
PROCESSING: Compute volume of cylinder using V=πr2h
Output: Configure volume of a cylinder in liters
*/

function configureVolume() {
	//INPUT
		let x = parseFloat(document.getElementById('radius').value);
		let y = parseFloat(document.getElementById('height').value);
		let z = Math.PI
	
	//PROCESSING
	let volume=Math.PI*Math.pow(x,2)*y
	

	//OUTPUT
 document.getElementById('output').innerHTML = volume.toFixed(2)+" Liters" ;
}
