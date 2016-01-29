// Use a button to call a function that puts text in the div

// This function will be called when we click the button
function test() {
  // Get a reference to the div element and display text in it
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "It worked!";
  // The alert was added for debugging
  alert("It worked!");
}

// Get a reference to the button
var testButton = document.getElementById("testButton");
// Assign a click event handler (a function) to the button
testButton.addEventListener("click", test);
