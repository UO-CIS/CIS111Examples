// Demo of a function that returns a string
// temp is an int for degrees farenheight
// rain is a boolean for raining or not
function wearACoat(temp, rain) {
  var message;

  if (temp <= 50 || rain == true)
    message = "Wear a coat";
  else
    message = "Enjoy the nice day";

  return message;
}
