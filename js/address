document.getElementById('currentdate').innerHTML = new Date().toLocaleDateString();

//Get City, State, and Zip, and Output the address as City, State, Zip
let $ = document;
let output = $.getElementById('output'),
		city = $.getElementById('city'),
		state = $.getElementById('state'),
		zip = $.getElementById('zip');

//Here I added an event listener to each input so that when you keyup on your keyboard, it executes the displayAddress function. But for people who are using touch screens, I left the button option there as well. 
city.addEventListener('keyup', displayAddress );
state.addEventListener('keyup', displayAddress );
zip.addEventListener('keyup', displayAddress );

function displayAddress(){
	//I'm using the backtick syntax introduced in ES6. To insert values you use this syntax ${variableHere}
	output.innerHTML = `${city.value}, ${state.value} ${zip.value}`
}