// Use a button to test the output div

// function that runs when the button is clicked
function test() {
  // Get a reference to the div
  var outputDiv = document.getElementById("output");
  // Test the outputDiv
  outputDiv.innerHTML = "Did this work?";
  alert("in function");
}

// connect the function to the button
// click event
var testButton =
      document.getElementById("inputButton");
testButton.addEventListener("click", test);
