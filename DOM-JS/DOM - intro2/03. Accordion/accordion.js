function toggle() {
  let btnStr = document.getElementsByClassName("button")[0].textContent;
  // console.log(btnStr);

  if (btnStr == "More") {
    document.getElementById("extra").style.display = "block";
    document.getElementsByClassName("button")[0].textContent = "Less";
  } else if (btnStr == "Less") {
    document.getElementById("extra").style.display = "none";
    document.getElementsByClassName("button")[0].textContent = "More";
  }
}
