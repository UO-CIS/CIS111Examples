button.addEventListener("checkPrime", checkPrime);

function checkPrime()
{
  var numberTextBox = document.getElementById("number");
  var number = numberTextBox.value;
  var result = isPrime(number);
  var resultParagraph = document.getElementById("result");
  resultParagraph.innerHTML = result;
}

function isPrime(number)
{
  var prime = true;
  for(var i = 2; i < number; i++)
  {
    if ((number % i) === 0)
      prime = false;
  }
  return prime;
}
