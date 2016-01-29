var degrees = prompt("Enter the temperature");
var wind = prompt("Enter the wind speed");
if(degrees < 35) {
  alert("wear a warm coat");
}
else if(degrees < 45) {
  alert("wear a jacket");
}
else if(degrees < 60 && wind > 10)
  alert("wear a wind breaker");
else if(degrees < 50 || wind > 20)
  alert("wear a really good wind breaker");
else {
  alert("enjoy the nice weather");
}
alert("all done");
