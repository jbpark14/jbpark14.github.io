window.onload = function curDate() {
	let today = new Date();
	let date =
		today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
	document.getElementById("currentdate").innerHTML = date;
};

//INPUT get the input from the array 
//PROCESSING calculate the evens from the array
//OUTPUT function returns the sum to user

function doTest() {
	let numbers = [
		Math.floor(Math.random() * 100),
		Math.floor(Math.random() * 100),
		Math.floor(Math.random() * 100),
		Math.floor(Math.random() * 100),
		Math.floor(Math.random() * 100)
	];
	document.getElementById("showArray").innerHTML = numbers;
	document.getElementById("output").innerHTML = countEvens(numbers);;
}

function countEvens(list) {
	//creates starting point for number of evens
	let evens=0;
	for (i=0; i < list.length; i++) {
	//Determines if number in list is even
	if (list[i] % 2 == 0) {
		evens++; 
		}
	}
	return evens;
}
