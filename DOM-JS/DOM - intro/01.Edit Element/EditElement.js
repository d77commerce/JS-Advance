function editElement(element, math, replaser) {
  // TODO
  while (element.textContent.includes(math)) {
    element.textContent = element.textContent.replace(math, replaser);
  }
}
