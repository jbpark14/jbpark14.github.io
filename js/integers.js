/*Defining Table 
INPUT: enter a number
PROCESSING: compute sum of all odd integers between 1 and the user's integer, inclusive; use loop to get it to run through and add all odd integers
OUTPUT: display the toal of all odd integers between 1 and the user's integer, inclusive.
*/

function total() {
	//Input
	let n = parseInt(document.getElementById("number").value); 
	
	//Processing
	let sum = 0;
	for (let i = 1; i <= number; i+=2) {
		sum += i
	}
	
	//Output
	document.getElementById("output").innerHTML = "The sum of all odd integers from 1 to your number, is: ";
	document.getElementById("total").innerHTML = sum;
}