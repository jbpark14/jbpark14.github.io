// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//INPUT number guess from user
//PROCESSING check number to verify if its too high, too low or right number
//OUTPUT display correct answer and count the number of guesses

function numberGuessGame() {
    let message = "Take guess between 1 and 100."
    let answer = 14;
    let guess;
	  let attempts = 0;
    do {
        guess = parseInt(prompt(message));
			attempts += 1;
        if (guess < answer) {
            message = guess +
            " is too low. Please enter another integer.";
        }
        else if (guess > answer) {
            message = guess +
            " is too high. Please enter another integer.";
        }
    } while (guess != answer);
    message = guess + " is correct! Tell them what they've won Johnny! Attempts to guess correctly = " + attempts;
	let results = message;
	document.getElementById('results').innerHTML = results;
}