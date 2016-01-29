function recArea(side1, side2)
{
  var area = side1 * side2;
  return area;
}

var firstSide = prompt("enter side 1");
var secondSide = prompt("enter side 2");
var rectangleArea =
  recArea(firstSide, secondSide);
alert(rectangleArea);
