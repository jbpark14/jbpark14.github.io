window.onload = function curDate() {
	let today = new Date();
	let date =
		today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
	document.getElementById("currentdate").innerHTML = date;
};

//INPUT get the input from the array 
//PROCESSING calculate the muliplier to the array
//OUTPUT function returns the sum to user

function testProg() {
	let numbers = [
		Math.floor(Math.random() * 100),
		Math.floor(Math.random() * 100),
		Math.floor(Math.random() * 100),
		Math.floor(Math.random() * 100),
		Math.floor(Math.random() * 100)
	];
	let multiplier = Math.floor(Math.random() * 11);
	document.getElementById('showArray').innerHTML = numbers;
	document.getElementById('showMulti').innerHTML = "Multiplier = " + multiplier;
	document.getElementById('output').innerHTML = multiply(numbers, multiplier);
}

function multiply(list, multiplier) {
	let products = "";
	for (i=0; i < list.length; i++) {
		let answer = list[i] * multiplier; 
		products+= answer + ", "; 
		}
	return products;
}