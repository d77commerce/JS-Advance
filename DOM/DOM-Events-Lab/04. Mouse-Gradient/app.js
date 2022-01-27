function attachGradientEvents() {
  let marker = document.getElementById('gradient');
  let outPrint = document.getElementById('result');
  marker.addEventListener('mousemove', event => {
    outPrint.textContent = `${Math.floor((event.offsetX / 300) * 100)}%`;
    console.log(outPrint.textContent);
  });
}
