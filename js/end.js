// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

 /*Defining Table
* Input - Use array already created
* Processing - Get first and last number in array and add them together.
* Output - Display the sum of the first and last number in the array. 
*/

//Input
function addEnds(list) {
    list = [5, 10, 15, 20, 25];
    let firstItem = list[0];
    let lastItem = list[list.length - 1];
    let addThem = firstItem + lastItem;
    document.getElementById("output").innerHTML = addThem;
    document.getElementById("showArray").innerHTML = list;
}