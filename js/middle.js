// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

//Defining Table
//Input- Get array from input
//Processing- Use the array and get the value of the middle number in the array. If number is even, return the average of the two middle numbers.
//Output- Display the middle number of the array. 

//Input
function getMiddle(list) {
  list= [10,30,50,70,90,110];
  let middleNumber= 0;
  numLength =list.length;
  if(numLength%2===0){
    middleNumber=(list[numLength/2-1]+list[numLength/2])/2;
  } else{ 
  answer =list[(numLength-1)/2];
  }
  document.getElementById("showArray").innerHTML= middleNumber; 
  return middleNumber;
  
}