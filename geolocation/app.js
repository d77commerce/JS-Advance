let btn = document.getElementById("btnGeo");
let geolocationTextDisplay = document.getElementById("one");
btn.addEventListener("click", test);
let getLatitude = 0;
let getLongitude = 0;

// console.log("test");
navigator.geolocation.getCurrentPosition(
  function (position) {
    console.log(position);
    getLatitude = position.coords.latitude;
    getLongitude = position.coords.longitude;
  },
  function () {
    alert("Culd not get your position");
  }
);
function test() {
  geolocationTextDisplay.innerText = `Your coordinats is ${getLatitude} , ${getLongitude}`;
}
