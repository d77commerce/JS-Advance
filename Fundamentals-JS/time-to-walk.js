function walk(steps, stepPrintMeter, kmPerH) {
  let distans = steps * stepPrintMeter;
  let distansCalcBreak = distans;
  let breakForMin = 0;
  while (distansCalcBreak >= 500) {
    distansCalcBreak -= 500;
    breakForMin++;
  }

  let allSec = 0.277778 * kmPerH;
  let time = distans / allSec;
  // console.log(distans);
  // console.log(breakForMin);
  // console.log(allSec);
  // console.log(time);
  function secondsToTime(e) {
    var h = Math.floor(e / 3600)
        .toString()
        .padStart(2, "0"),
      m = Math.floor((e % 3600) / 60 + breakForMin)
        .toString()
        .padStart(2, "0"),
      s = Math.round(e % 60)
        .toString()
        .padStart(2, "0");

    return h + ":" + m + ":" + s;
    //return `${h}:${m}:${s}`;
  }

  console.log(secondsToTime(time));
}
walk(4000, 0.6, 5);
