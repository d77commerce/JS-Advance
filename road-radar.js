function radar(speed, place) {
  let status = " ";
  let extraSpeed = 0;
  switch (place) {
    case "motorway":
      extraSpeed = speed - 130;
      if (speed > 130) {
        if (speed <= 150) {
          status = "speeding";
        } else if (speed > 170) {
          status = "reckless driving";
        } else {
          status = "excessive speeding";
        }
        console.log(
          `The speed is ${extraSpeed} km/h faster than the allowed speed of 130 - ${status}`
        );
      } else {
        console.log(`Driving ${speed} km/h in a 130 zone`);
      }
      break;
    case "interstate":
      extraSpeed = speed - 90;
      if (speed > 90) {
        if (speed <= 110) {
          status = "speeding";
        } else if (speed > 130) {
          status = "reckless driving";
        } else {
          status = "excessive speeding";
        }
        console.log(
          `The speed is ${extraSpeed} km/h faster than the allowed speed of 90 - ${status}`
        );
      } else {
        console.log(`Driving ${speed} km/h in a 90 zone`);
      }
      break;
    case "city":
      extraSpeed = speed - 50;
      if (speed > 50) {
        if (speed <= 70) {
          status = "speeding";
        } else if (speed > 90) {
          status = "reckless driving";
        } else {
          status = "excessive speeding";
        }
        console.log(
          `The speed is ${extraSpeed} km/h faster than the allowed speed of 50 - ${status}`
        );
      } else {
        console.log(`Driving ${speed} km/h in a 50 zone`);
      }
      break;
    case "residential":
      extraSpeed = speed - 20;
      if (speed > 20) {
        if (speed <= 40) {
          status = "speeding";
        } else if (speed > 60) {
          status = "reckless driving";
        } else {
          status = "excessive speeding";
        }
        console.log(
          `The speed is ${extraSpeed} km/h faster than the allowed speed of 20 - ${status}`
        );
      } else {
        console.log(`Driving ${speed} km/h in a 20 zone`);
      }
      break;
  }
}
radar(120, "interstate");
