let geolocationTextDisplay = document.getElementById("one");
let btn = document.getElementById("btnGeo");

let getLatitude = 0;
let getLongitude = 0;

const mapBtn = document.createElement("button");
mapBtn.innerText = "SHOW in GOOGLE MAP";

const mapShow = document.createElement("button");
mapShow.innerText = "SHOW in page";

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
btn.addEventListener("click", test);
mapBtn.addEventListener("click", showInGoogleMap);
mapShow.addEventListener("click", showInPage);

function test() {
  geolocationTextDisplay.innerText = `Your coordinats is ${getLatitude} , ${getLongitude}`;
  const mapShowBtn = document.getElementById("geo").appendChild(mapBtn);
  const mapShowBtnInPage = document.getElementById("geo").appendChild(mapShow);
}
function showInGoogleMap() {
  window.open(
    `https://www.google.com/maps/@${getLatitude},${getLongitude},14z`
  );
}
function showInPage() {
  const coords = [getLatitude, getLongitude];
  const map = L.map("map").setView(coords, 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  L.marker(coords).addTo(map).bindPopup("Your position.").openPopup();

  map.on("click", (mapEvent) => {
    console.log(mapEvent);
    const { lat, lng } = mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
        })
      )
      .setPopupContent("your click postion")
      .openPopup();
  });
}
