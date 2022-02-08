function createAssemblyLine() {
  const carObj = {
    hasClima(car) {
      Object.assign(car, { temp: 21 });
      Object.assign(car, { tempSettings: 21 });
      car["adjustTemp"] = function () {
        if (this.temp > this.tempSettings) {
          this.temp--;
        } else if (temp < tempSettings) {
          temp++;
        }
      };
    },
    hasAudio(car) {
      car["currentTrack"] = {};
      car["nowPlaying"] = function () {
        if (Car.currentTrack !== null) {
          console.log(
            `Now playing '${currentTrack.name}' by ${currentTrack.artist}`
          );
        }
      };
    },
    hasParktronic(car) {
      car["checkDistance"] = function (distans) {
        if (distans < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (distans < 0.25) {
          console.log("Beep! Beep!");
        } else if (distans < 0.5) {
          console.log("Beep!");
        } else {
          console.log("");
        }
      };
    },
  };
  return carObj;
}
const assemblyLine = createAssemblyLine();

const myCar = {
  make: "Toyota",
  model: "Avensis",
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
