let today = new Date(); // new Date object
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;
function math() {
  let r = document.getElementById("r").value;
  let h = document.getElementById("h").value;
  let output = document.getElementById("output");
  output.value = Math.PI * Math.pow (r, 2) * h / 61.024;
}
