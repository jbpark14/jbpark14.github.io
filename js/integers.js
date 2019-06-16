
function Sum() {
	//inputINPUT: Get any integer from the user
	  let n = parseInt(document.getElementById("number").value); 
	  //PROCESSING: Add up all of the odd numbers between 1- integer.
	  let sum = 0;
	  for (let i = 1; i <= n; i += 2) {
		  sum += i
	  }
	  
	  //OUTPUT: Display results to user. 
	document.getElementById("text").innerHTML = "All odd integers add up to be: ";
	document.getElementById("output").innerHTML = sum;
	  }