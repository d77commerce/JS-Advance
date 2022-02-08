function addItem() {
  let ilElement = document.createElement('li');
  let newItemTextElement = document.getElementById('newItemText').value;
  ilElement.textContent = newItemTextElement;
  let ulElement = document.getElementById('items');
  ulElement.appendChild(ilElement);
  console.log('one');
}
