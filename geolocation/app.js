let btn = document.getElementById("btnGeo");
btn.addEventListener("click", test);

function test() {
  console.log("test");
  navigator.geolocation.getCurrentPosition(){
      function(position){
          
      }
  }
}
test();
document.getElementById("demo").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}
