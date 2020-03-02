console.log("running!!");
/*
 REPEAT AFTER ME: I will not change any of the function names!!! Nor will I change any HTML or CSS. ONLY the JavaScript
*/
/*  
  Instructions:
  - You must not change any of the function names!!! Nor change any HTML or CSS. 
  - Comments have been left in the comments to help you.
  - Use the below code to help you get started in a positive direction right away!
*/

/*
  Material to reference!!
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  - https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  - https://javascript.info/searching-elements-dom
*/

//These are your buttons!
  const start = document.querySelector("#start");//Roger
  const clear = document.querySelector("#clear");//Roger

//This is access to where you want to display your random number
  let display = document.querySelector(".display");//Roger

// Function to generate a random number
// This function needs to take in a single parameter and that would be the highest possible number.

function randomNumber(num) {
  const randNum = Math.ceil((Math.random()*num));// adapted from https://medium.com/@josephcardillo/using-math-random-in-javascript-c49eff920b11
  
  // now you have a number in your <input> what will you do with it?
  return randNum;//MJB
}

// Start function that will call the random number function
function startFn() {
  //const catchRand = randomNumber(max.value);//MJB //This is wrong but it works... WHY?
  const catchRand = randomNumber(document.querySelector("#max").value);//MJB
  display.textContent = catchRand;//MJB
}

// Stop function that will stop the start function above
function clearFn() {
  display.textContent = "Random number will go here";
  document.querySelector("#max").value = null;

  display.textcontent="Random number will go here";
  
  //document.querySelector(".display")="Random number will go here";
  
  //const restoreText = ""


  //location.reload();// direct quote from https://www.w3schools.com/jsref/met_loc_reload.asp
  
  // Like the video demo you saw you need to clean up your display to show it
  // as though it's freshly reloaded.
}

// Listen for button clicks!!
// Start button
start.addEventListener("click", startFn);
// Clear Button
clear.addEventListener("click", clearFn);

// REFERENCES
// 
// Cardillo, J. (2018, August 28). Using Math.random() in JavaScript. Retrieved February 1, 2020, from https://medium.com/@josephcardillo/using-math-random-in-javascript-c49eff920b11
//
// w3schools. (n.d.). Location reload() Method. Retrieved February 1, 2020, from https://www.w3schools.com/jsref/met_loc_reload.asp

  