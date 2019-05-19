// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

// INPUT
function math() {
  let r = document.getElementById("r").value;
  let h = document.getElementById("h").value;
  let output = document.getElementById("output");
// PROCESSING
// OUTPUT
  output.value = Math.PI * Math.pow (r, 2) * h / 61.024;
}
