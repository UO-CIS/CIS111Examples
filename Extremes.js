// Function to find a minimum value
//function min(a, b, c) {
var min = function(a, b, c) {
  var smallest;
  if(a < b && a < c) {
    smallest = a;
  }
  else if (b < c) {
    smallest = b;
  }
  else {
    smallest = c;
  }

  return smallest;
}

// Function to find a maximum value
function max(a, b, c) {
  var largest;
  if(a > b && a > c) {
    largest = a;
  }
  else if (b > c) {
    largest = b;
  }
  else {
    largest = c;
  }

  return largest;
}

function extremes() {
  var num1 = parseFloat(prompt("Enter number 1"));
  var num2 = parseFloat(prompt("Enter number 2"));
  var num3 = parseFloat(prompt("Enter number 3"));
  var maximum = max(num1, num2, num3);
  var minimum = min(num1, num2, num3);
  alert("Max: " + maximum.toFixed(2) + "\n" +
    "Min: " + minimum.toFixed(2));
}

extremes();
