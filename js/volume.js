//Defining Table
//Input: get height and radius of cylinder form user
//Processing: compute the volume of they cyliner using the user input and this formula V=πr2h
//Output: display the volume of the cylinder

function cylinderVolume() {
	//Input
	let r = parseInt(document.getElementById("radius").value);
	let h = parseInt(document.getElementById("height").value);
	//Processing
	 let volume = Math.PI * Math.pow(r, 2) * h / 61.024;
	//Output
	document.getElementById("output").innerHTML = volume;
}
