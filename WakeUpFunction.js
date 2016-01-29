// Wake-up time example
function isWakeUpTime(time, day) {
  var wakeUp = false;
  if (time == 600 &&
    day != "Saturday" &&
    day != "Sunday")
      wakeUp = true;

    return wakeUp;
}
