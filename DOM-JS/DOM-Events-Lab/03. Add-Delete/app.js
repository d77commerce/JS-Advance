function addItem() {
  let addNewText = document.getElementById('newItemText');
  let ulElements = document.getElementById('items');
  let liElement = document.createElement('li');
  liElement.textContent = addNewText.value;
  addNewText.value = '';
  let delElement = document.createElement('a');
  delElement.href = '#';
  delElement.textContent = '[Delete]';
  delElement.addEventListener('click', function (e) {
    e.currentTarget.parentElement.remove();
  });
  liElement.appendChild(delElement);
  ulElements.appendChild(liElement);
}
