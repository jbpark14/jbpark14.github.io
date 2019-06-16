//INPUT  get integer from user and set range of numbers allowed
function oddSum() {
	let n = parseInt(document.getElementById("n").value);

//PROCESSING calculate the user number and find all odd numbers less than user number.
	let sum = 0;
	for(let i = 1; i <= n; i += 2) {
			sum += i;
	}
	//OUTPUT display total number for user.
document.getElementById("output").innerHTML = sum;
}