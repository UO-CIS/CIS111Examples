
// Definition for a function that gets a name
// from a text box and displays it in a div
function displayName()
{
  // Get a reference to the input and read the value
  var nameTextBox = document.getElementById("name");
  var name = nameTextBox.value;
  // Get a reference to the div and display the name
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = name;
}


// Get a reference to the button and
// assign a function to the click event
var enterButton = document.getElementById("inputButton");
enterButton.addEventListener("click", displayName);
