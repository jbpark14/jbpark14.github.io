// Defining Table 
//Input: get input from user data
//Processing: create formula to calculate investment calendar
//Output: show results of users input for Future Investment.

function arith() {
	//Input
	let p = parseInt(document.getElementById("p").value);
	let r = parseFloat(document.getElementById("r").value);
	let n = parseFloat(document.getElementById("n").value);
	let y = parseFloat(document.getElementById("y").value);
	let output = computeFutureValue(p, r, n, y);
	document.getElementById("output").innerHTML = "$" + output.toFixed(2);
}
	//PROCESSING p = principal, r = annual rate, y = number of years, n = periods of year.
	function computeFutureValue(p, r, n, y) {
	let x = r / n;
	let period = n * y;
	let output = p * Math.pow((1 + x), period);
		return output;
}