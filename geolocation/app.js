let btn = document.getElementById("btnGeo");
const mapBtn = document.createElement("button");
mapBtn.innerText = "SHOW in GOOGLE MAP";
mapBtn.addEventListener("click", showInGoogleMap);
let geolocationTextDisplay = document.getElementById("one");
btn.addEventListener("click", test);
let getLatitude = 0;
let getLongitude = 0;

// console.log("test");
if (navigator.geolocation) {
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
}

function test() {
  geolocationTextDisplay.innerText = `Your coordinats is ${getLatitude} , ${getLongitude}`;
  const mapShowBtn = document.getElementById("geo").appendChild(mapBtn);
}
function showInGoogleMap() {
  window.open(
    `https://www.google.com/maps/@${getLatitude},${getLongitude},14z`
  );
}
